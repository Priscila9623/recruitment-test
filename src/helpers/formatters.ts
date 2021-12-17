if (typeof Intl === 'undefined') {
  require('intl');
  require('intl/locale-data/jsonp/en');
}

export function formatWholeDollars(x: number): string {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
  return formatter.format(Math.round(x));
}

export function formatDollars(x: number): string {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
  return formatter.format(x);
}

const monthsFormatted = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Jan 15/2020
export function formatDate(x: number): string {
  return `${monthsFormatted[new Date(x).getMonth()]} ${new Date(x).getDate()}/${new Date(x).getFullYear()}`;
}
