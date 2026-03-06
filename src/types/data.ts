export type NormalisedData = {
  heading: string;
  subheading?: string;
  body: string;
  dataFacts?: {title: string; value: string}[];
}[];
