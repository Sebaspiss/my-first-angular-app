import { Component } from "@angular/core";
import { ChartLine } from "./components/chartLine";
import { Portfolio } from "./components/portfolio";
import { Activities } from "./components/activities";
import { News } from "./components/news";

@Component({
    selector: "page-dashboard",
    templateUrl: "./dashboard.html",
    imports: [ChartLine, Portfolio, Activities, News]
})

export class Dashboard {}