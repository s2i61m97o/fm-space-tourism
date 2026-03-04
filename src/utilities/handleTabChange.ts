import type {Dispatch, SetStateAction} from "react";

export const handleTabChange = <T extends string>(
  e: React.KeyboardEvent,
  stateSet: Dispatch<SetStateAction<T>>,
  index: number,
  arr: T[],
) => {
  const total = arr.length;
  let newIndex: number | null = null;

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
      newIndex = (index + 1) % total;
      break;
    case "ArrowLeft":
    case "ArrowUp":
      newIndex = (index - 1 + total) % total;
      break;
    case "Home":
      newIndex = 0;
      break;
    case "End":
      newIndex = total - 1;
      break;
    default:
      return;
  }

  e.preventDefault();
  stateSet(arr[newIndex]);
};
