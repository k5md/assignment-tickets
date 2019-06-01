import _ from 'lodash';

export const generateHoursRange = (start, end, step) => _
  .range(start, end + step, step)
  .map(hour => `${hour}:00`);


export const generateDaysRange = (base, minOffset, maxOffset) => _
  .range(minOffset, maxOffset + 1)
  .map(offset => new Date(
    base.getFullYear(),
    base.getMonth() + 1,
    base.getDate() + offset,
  ))
  .map(date => [ date.getFullYear(), date.getMonth(), date.getDate() ] // months start from 0
  .join('.') // YYYY.MM.DD
);
