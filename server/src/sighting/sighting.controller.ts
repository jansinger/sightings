import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SightingService } from "./sighting.service";
import { SightingControllerBase } from "./base/sighting.controller.base";

@swagger.ApiTags("sightings")
@common.Controller("sightings")
export class SightingController extends SightingControllerBase {
  constructor(
    protected readonly service: SightingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
