export function formatWholeDollars(x: number): string {
  return `$${x.toFixed(2)}`;
}

const monthsFormatted = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Jan 15/2020
export function formatDate(x: number): string {
  return `${monthsFormatted[new Date(x).getMonth()]} ${new Date(x).getDate()}/${new Date(x).getFullYear()}`;
}
