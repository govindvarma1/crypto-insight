export default function converter(number) {
  if (number < 1000) {
    return (number / 1).toFixed(2).replace(/\.0$/, "") + "";
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1).toFixed(2).replace(/\.0$/, "") + "";
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + " Million";
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + " Billion";
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (
      (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + " Trillion"
    );
  }
}
