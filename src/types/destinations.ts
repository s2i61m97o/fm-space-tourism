export type DestinationList = "moon" | "mars" | "europa" | "titan";

export interface Destination {
  name: DestinationList;
  image_alt: string;
  description: string;
  distance: string;
  travel: string;
}
