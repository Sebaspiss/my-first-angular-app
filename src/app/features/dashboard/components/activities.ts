import { Component, inject } from "@angular/core";
import { Card } from "primeng/card";
import { ActivitiesService } from "../../../core/services/activities.service";
import { ActivityBadgeDirective } from "../directives/activity-badge.directive";
import { ActivityIconDirective } from "../directives/activity-icon.directive";
import { ActivityAmountDirective } from "../directives/activity-amount.directive";

@Component({
    selector: "activities",
    standalone: true,
    imports: [
        Card,
        ActivityBadgeDirective,
        ActivityIconDirective,
        ActivityAmountDirective
    ],
    templateUrl: "./activities.html"
})
export class Activities {
    activitiesService = inject(ActivitiesService);
}