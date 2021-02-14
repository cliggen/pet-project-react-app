export const getPostDate = () => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const date = new Date();

  const fDate = [
    `0${date.getHours()}`,
    `0${date.getMinutes()}`
  ].map(component => component.slice(-2));
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hh = fDate[0];
  const mm = fDate[1];
  return `${month} ${day}, ${year} at ${hh}:${mm}`;
};
export const xd = () => {
};
