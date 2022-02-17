import { Module } from "@nestjs/common";
import { SightingModuleBase } from "./base/sighting.module.base";
import { SightingService } from "./sighting.service";
import { SightingController } from "./sighting.controller";
import { SightingResolver } from "./sighting.resolver";

@Module({
  imports: [SightingModuleBase],
  controllers: [SightingController],
  providers: [SightingService, SightingResolver],
  exports: [SightingService],
})
export class SightingModule {}
