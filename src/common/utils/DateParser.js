const yyyymmdd = timestamp => {
  const date = new Date(timestamp * 1000);
  const yyyy = date.getFullYear();
  const mm = `${0 + date.getMonth() + 1}`.slice(-2); // Months are zero based. Add leading 0.
  const dd = `${0 + date.getDate()}`.slice(-2); // Add leading 0.
  const hh = date.getHours();
  const h = hh;
  const min = `${0 + date.getMinutes()}`.slice(-2);
  // const ampm = 'AM';

  const time = `${yyyy}.${mm}.${dd} ${h}:${min}`;
  return time;
};

export default yyyymmdd;
