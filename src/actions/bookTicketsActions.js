import * as types from '../constants/actionTypes';

export const bookTickets = (date, time, seats) => ({
  type: types.BOOK_TICKETS,
  date,
  time,
  seats,
});

export const selectDate = date => ({
  type: types.SELECT_DATE,
  date,
});

export const selectTime = time => ({
  type: types.SELECT_TIME,
  time,
});

export const selectSeat = (row, col) => ({
  type: types.SELECT_SEAT,
  row,
  col,
});

export const deselectSeat = (row, col) => ({
  type: types.DESELECT_SEAT,
  row,
  col,
});
