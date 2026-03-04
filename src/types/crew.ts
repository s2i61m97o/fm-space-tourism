import {data} from "@/data/crew";

export type CrewMembers = (typeof data)[number]["name"];

export type Replace<T extends CrewMembers> =
  T extends `${infer Head}-${infer Tail}` ? `${Head}_${Tail}` : T;
