const { timeZone } = Intl.DateTimeFormat().resolvedOptions().timeZone;

const formatDate = timestamp => {
  if (typeof timestamp === 'string') {
    timestamp = Number(timestamp);
  }
  return new Intl.DateTimeFormat('pl-PL', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    timeZone
  }).format(timestamp);
};

export default formatDate;
