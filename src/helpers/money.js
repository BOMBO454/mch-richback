export function formattedMoney(value) {
  if (!value) return "0";

  let minimumFractionDigits = +value % 1 === 0 ? 0 : 2;

  return (+value)
    .toLocaleString("en-US", {
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: 2,
    })
    .replace(/,/g, " ");
}
