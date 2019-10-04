export default () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const [day, _, year] = date
    .toLocaleString()
    .substr(0, 10)
    .split('/');

  return `${month} ${day} ${year}`;
};
