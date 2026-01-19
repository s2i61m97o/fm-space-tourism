interface SwipedEventDetail {
  dir: "left" | "right" | "up" | "down";
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}

interface WindowEventMap {
  swiped: CustomEvent<SwipedEventDetail>;
  "swiped-left": CustomEvent<SwipedEventDetail>;
  "swiped-right": CustomEvent<SwipedEventDetail>;
  "swiped-up": CustomEvent<SwipedEventDetail>;
  "swiped-down": CustomEvent<SwipedEventDetail>;
}
