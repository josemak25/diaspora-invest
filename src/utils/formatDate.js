export const formatAgentListsDate = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const [day, , year] = date
    .toLocaleString()
    .substr(0, 10)
    .split('/');

  return `${month} ${day} ${year}`;
};

export const formatAgentDetailsDate = createdAt => {
  const date = new Date(createdAt);
  const [month, time] = date
    .toLocaleString('default', { month: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
    .split(',');
  const [day, , year] = date
    .toLocaleString()
    .substr(0, 10)
    .split('/');
  return `${month} ${day} ${year} @ ${time}`;
};
