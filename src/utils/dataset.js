import _ from 'lodash';
import { generateHoursRange, generateDaysRange } from './dates';

// constants for generating data
const hallRows = 5;
const hallCols = 10;

const startHour = 10;
const endHour = 20;
const durationHours = 2;

const minDaysOffset = -7;
const maxDaysOffset = 7;

const now = new Date();

export const daysRange = generateDaysRange(now, minDaysOffset, maxDaysOffset); // list of 'YYYY/MM/DD'
export const hoursRange = generateHoursRange(startHour, endHour, durationHours); // list of 'HH:MM'

const generateHallData = () => {
  const hall = [];
  for (let i = 0; i < hallRows; i += 1) {
    const row = [];
    for (let j = 0; j < hallCols; j += 1) {
      const seat = {
        status: _.sample(['free', 'taken']),
        row: i,
        col: j,
      };
      row.push(seat);
    }
    hall.push(row);
  }
  return hall;
}

// generates an object with timestrings (HH:MM) as keys, hallData array as values
export const generateDataEntry = () => hoursRange.reduce(
  (acc, hour) => ({ ...acc, [hour]: generateHallData() }), {}
);

// generates an object with datestrings (DD/MM/YYYY) as keys, dataEntries as values
export const generateDataset = () => daysRange.reduce(
  (acc, day) => ({ ...acc, [day]: generateDataEntry() }), {}
);
