import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SightingResolverBase } from "./base/sighting.resolver.base";
import { Sighting } from "./base/Sighting";
import { SightingService } from "./sighting.service";

@graphql.Resolver(() => Sighting)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SightingResolver extends SightingResolverBase {
  constructor(
    protected readonly service: SightingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
