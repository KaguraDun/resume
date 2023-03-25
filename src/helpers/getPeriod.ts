const checkIsCurrentDay = (date: Date) => {
  const currentDate = new Date();

  return (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDay() === currentDate.getDay()
  );
};

const getPeriod = (start: Date, end: Date) => {
  const startMonthYear = `${start.toLocaleString('default', {
    month: 'short',
  })}. ${start.getFullYear()}`;

  const endMonthYear = !checkIsCurrentDay(end)
    ? `${end.toLocaleString('default', {
        month: 'short',
      })}. ${end.getFullYear()}`
    : 'Present';

  return `${startMonthYear} - ${endMonthYear}`;
};

export default getPeriod;
