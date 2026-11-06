import { Component, inject } from "@angular/core";
import { Card } from "primeng/card";
import { NewsService } from "@coreServices/news.service";
import { NewsCategoryBadgeDirective } from "../directives/news-category-badge.directive";

@Component({
    selector: "news",
    templateUrl: "./news.html",
    imports: [Card, NewsCategoryBadgeDirective]
})
export class News {
    newsService = inject(NewsService);
}