import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SightingWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  locationText?: StringNullableFilter;
};
