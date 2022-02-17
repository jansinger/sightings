import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SightingServiceBase } from "./base/sighting.service.base";

@Injectable()
export class SightingService extends SightingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
