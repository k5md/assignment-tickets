import _ from 'lodash';

export const generateHoursRange = (start, end, step) => _
  .range(start, end + step, step)
  .map(hour => `${hour}:00`);


export const generateDaysRange = (base, minOffset, maxOffset) => _
  .range(minOffset, maxOffset + 1)
  .map(offset => new Date(
    base.getFullYear(),
    base.getMonth(),
    base.getDate() + offset,
  ))
  .map(date => [ date.getFullYear(), date.getMonth(), date.getDate() ] // months start from 0
  .join('/') // YYYY/MM/DD
);

// convert from YYYY/MM/DD to YYYY/MM+1/DD
export const getRealDate = (str) => {
  const [ year, month, day ] = str.split('/');
  return [ year, Number(month) - 1, day].join('/');
};

// convert from YYYY/MM/DD to YYYY/MM-1/DD
export const getDisplayedDate = (str) => {
  const [ year, month, day ] = str.split('/');
  return [ year, Number(month) + 1, day].join('/');
};
