import { SightingWhereInput } from "./SightingWhereInput";
import { SightingOrderByInput } from "./SightingOrderByInput";

export type SightingFindManyArgs = {
  where?: SightingWhereInput;
  orderBy?: SightingOrderByInput;
  skip?: number;
  take?: number;
};
