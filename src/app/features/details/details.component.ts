import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlickModel, FlickService } from "~/app/core/";

@Component({
	moduleId: module.id,
	selector: "ns-details",
	templateUrl: "details.component.html",
})
export class DetailsComponent {
	flick: FlickModel | undefined = undefined;

	constructor(
		private activatedRoute: ActivatedRoute,
		private flickService: FlickService
	) {}

	ngOnInit() {
		const id = Number(this.activatedRoute.snapshot.params.id);

		if (id) {
			this.flick = this.flickService.getFlickById(id);
		}
	}
}
