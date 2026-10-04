import { Component, OnInit, inject } from "@angular/core";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { PortfolioService } from "../../core/services/portfolio.service";
import { TradeService } from "../../core/services/trade.service";
import { PRODUCT_STATUS } from "./trade.constants";
import { TradeAssetBadgeDirective } from "./directives/trade-asset-badge.directive";
import { TradeStatusBadgeDirective } from "./directives/trade-status-badge.directive";
import { TradeTrendColorDirective } from "./directives/trade-trend-color.directive";

@Component({
    selector: "trade",
    templateUrl: "./trade.html",
    standalone: true,
    imports: [
        TableModule,
        Button,
        Card,
        TradeAssetBadgeDirective,
        TradeStatusBadgeDirective,
        TradeTrendColorDirective
    ]
})
export class Trade implements OnInit {
    readonly PRODUCT_STATUS = PRODUCT_STATUS;
    
    tradeService = inject(TradeService);
    portfolioService = inject(PortfolioService);

    ngOnInit() {}
}