const getTotalExperience = (start: Date, end: Date) => {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  let period = '';

  if (years > 0) {
    period += `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) {
      period += ` and ${months} month${months > 1 ? 's' : ''}`;
    }
  } else if (months > 0) {
    period += `${months} month${months > 1 ? 's' : ''}`;
  }

  return period;
};

export default getTotalExperience;
