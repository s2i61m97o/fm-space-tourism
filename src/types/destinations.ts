export type DestinationList = "moon" | "mars" | "europa" | "titan";

export interface Destination {
  name: DestinationList;
  description: string;
  data: {
    avg_distance: string;
    est_travel_time: string;
  };
  img: {
    src: string;
    alt: string;
  };
}
