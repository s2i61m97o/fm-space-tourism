export const keyboardTabChange = <T extends string>(
  e: React.KeyboardEvent,
  handleChange: (newActive: string) => void,
  index: number,
  arr: T[],
) => {
  const total = arr.length;
  let newIndexTitle: string | undefined;

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
      newIndexTitle = arr.at((index + 1) % total);
      break;
    case "ArrowLeft":
    case "ArrowUp":
      newIndexTitle = arr.at((index - 1 + total) % total);
      break;
    case "Home":
      newIndexTitle = arr.at(0);
      break;
    case "End":
      newIndexTitle = arr.at(total - 1);
      break;
    default:
      return;
  }

  if (newIndexTitle === undefined) {
    newIndexTitle = arr[0];
  }

  e.preventDefault();
  handleChange(newIndexTitle);
};
