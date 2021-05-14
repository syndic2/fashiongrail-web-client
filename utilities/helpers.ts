export const thousandSeparators= (number: number): string => {
  let number_parts = number.toString().split('.');
  number_parts[0] = number_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return number_parts.join('.');
};
