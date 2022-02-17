import { Sighting as TSighting } from "../api/sighting/Sighting";

export const SIGHTING_TITLE_FIELD = "locationText";

export const SightingTitle = (record: TSighting): string => {
  return record.locationText || record.id;
};
