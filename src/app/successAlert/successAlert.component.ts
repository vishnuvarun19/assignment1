import { Component } from "@angular/core";


@Component({
    selector:"app-success-alert",
    templateUrl:"./successAlert.component.html",
    styles:[`
        p {
            color:green;
            padding:20px;
            background-color:palegreen;
            border:1px solid green;
        }
    `],
})
export class SuccessAlertComponent{

}