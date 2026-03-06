export type NormalisedData = {
  heading: string;
  subheading?: string;
  body: string;
  dataFacts?: {title: string; value: string}[];
}[];

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

export interface Crew {
  name: string;
  img: {
    src: string;
    alt: string;
  };
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  image: {
    src: {
      landscape: string;
      portrait: string;
    };
    alt: string;
  };
  description: string;
}
