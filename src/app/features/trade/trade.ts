import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { Dialog } from "primeng/dialog";
import { InputNumber } from "primeng/inputnumber";
import { PortfolioService } from "@coreServices/portfolio.service";
import { ComputedProduct, TradeService } from "@coreServices/trade.service";
import { ActivitiesService } from "@coreServices/activities.service";
import { SettingsService } from "@coreServices/settings.service";
import { PRODUCT_STATUS } from "@coreServices/trade.service";
import { TradeAssetBadgeDirective } from "./directives/trade-asset-badge.directive";
import { TradeStatusBadgeDirective } from "./directives/trade-status-badge.directive";
import { TradeTrendColorDirective } from "./directives/trade-trend-color.directive";

export type TradeMode = 'buy' | 'sell';

@Component({
    selector: "trade",
    templateUrl: "./trade.html",
    imports: [
        FormsModule,
        TableModule,
        Button,
        Card,
        Dialog,
        InputNumber,
        TradeAssetBadgeDirective,
        TradeStatusBadgeDirective,
        TradeTrendColorDirective
    ]
})
export class Trade {
    readonly PRODUCT_STATUS = PRODUCT_STATUS;

    tradeService = inject(TradeService);
    portfolioService = inject(PortfolioService);
    private activitiesService = inject(ActivitiesService);
    private settingsService = inject(SettingsService);

    // Order dialog state
    selectedProduct = signal<ComputedProduct | null>(null);
    tradeMode = signal<TradeMode>('buy');
    quantity = signal<number>(0);

    isDialogVisible = computed(() => this.selectedProduct() !== null);
    isBuy = computed(() => this.tradeMode() === 'buy');

    /** Units held for the selected product. */
    heldQuantity = computed(() => {
        const product = this.selectedProduct();
        return product ? this.portfolioService.getHoldingQuantity(product.symbol) : 0;
    });

    /** Max units purchasable with the available cash (buy) or held units (sell). */
    maxQuantity = computed(() => {
        const product = this.selectedProduct();
        if (!product) return 0;
        return this.isBuy()
            ? this.portfolioService.baseAvailableCash() / product.price
            : this.heldQuantity();
    });

    /** Order total in the selected currency (for display). */
    formattedTotal = computed(() => {
        const product = this.selectedProduct();
        const total = product ? product.convertedPrice * this.quantity() : 0;
        return this.formatMoney(total);
    });

    /** Validation error for the current order, or null if valid. */
    orderError = computed<string | null>(() => {
        const product = this.selectedProduct();
        const qty = this.quantity();
        if (!product || qty <= 0) return 'Enter a quantity greater than 0';
        if (this.isBuy() && qty * product.price > this.portfolioService.baseAvailableCash() + 1e-9) {
            return 'Insufficient available cash';
        }
        if (!this.isBuy() && qty > this.heldQuantity() + 1e-9) {
            return 'You cannot sell more units than you hold';
        }
        return null;
    });

    /** Sell is allowed only if the asset is tradable and held in portfolio. */
    canSell(product: ComputedProduct): boolean {
        return product.status !== PRODUCT_STATUS.SUSPENDED && this.portfolioService.hasAsset(product.symbol);
    }

    openOrder(product: ComputedProduct, mode: TradeMode) {
        this.tradeMode.set(mode);
        this.quantity.set(0);
        this.selectedProduct.set(product);
    }

    closeOrder() {
        this.selectedProduct.set(null);
    }

    setMaxQuantity() {
        // Round down to 4 decimals to never exceed the limit
        this.quantity.set(Math.floor(this.maxQuantity() * 10000) / 10000);
    }

    confirmOrder() {
        const product = this.selectedProduct();
        const qty = this.quantity();
        if (!product || this.orderError()) return;

        const success = this.isBuy()
            ? this.portfolioService.buy(product.symbol, product.name, qty, product.price)
            : this.portfolioService.sell(product.symbol, qty, product.price);

        if (success) {
            const mode = this.tradeMode();
            this.activitiesService.addActivity({
                id: Date.now(),
                type: mode,
                title: `${mode === 'buy' ? 'Buy' : 'Sell'} ${product.name}`,
                date: new Date().toLocaleDateString('en-GB'),
                status: 'Executed',
                baseAmount: qty * product.price,
                shares: `${qty} ${product.symbol}`
            });
            this.closeOrder();
        }
    }

    private formatMoney(value: number): string {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
}
