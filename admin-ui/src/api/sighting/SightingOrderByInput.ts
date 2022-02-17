import { SortOrder } from "../../util/SortOrder";

export type SightingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  locationText?: SortOrder;
  updatedAt?: SortOrder;
};
