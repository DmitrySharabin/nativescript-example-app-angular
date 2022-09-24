import { Component } from "@angular/core";

import { FlickService } from "~/app/core/services";

@Component({
	moduleId: module.id,
	selector: "ns-home",
	templateUrl: "home.component.html",
})
export class HomeComponent {
	flicks = this.flickService.getFlicks();

	constructor(private flickService: FlickService) {}
}
