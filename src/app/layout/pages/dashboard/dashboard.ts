import { Component } from "@angular/core";
import { ChartLine } from "./components/chartLine";
import { Portfolio } from "./components/portfolio";
import { Activities } from "./components/activities";
import { News } from "./components/news";

@Component({
    selector: "page-dashboard",
    template: `
    <div class="bg-blue-400 flex flex-col"> 
        <div class="flex flex-row h-1/2">
            <chartLine class="relative w-1/2 mx-5 mt-5"></chartLine>
            <portfolio class="relative w-1/2 mx-5 mt-5"></portfolio>
        </div>
        <div class="flex flex-row h-1/2">
            <activities class="relative w-1/2 mx-5 mt-5"></activities>
            <news class="relative w-1/2 mx-5 mt-5"></news>
        </div>
    </div>
        `,
    imports: [ChartLine, Portfolio, Activities, News]
})

export class Dashboard {}