import * as types from '../constants/actionTypes';
import { generateDataEntry, generateDataset, hoursRange } from '../utils/dataset';


const dataset = generateDataset();

const now = new Date();
const selectedDate = [ now.getFullYear(), now.getMonth(), now.getDate() ].join('/'); // months start from 0
const selectedTime = hoursRange[0];
const initialState = {
  selectedDate,
  selectedTime,
  selectedSeats: [],
  ticketHistory: dataset,
};

const handlers = {
  [types.BOOK_TICKETS]:
    (state) => {
      const { selectedSeats, selectedDate, selectedTime, ticketHistory } = state;
      const updatedHall = [...ticketHistory[selectedDate][selectedTime]];
      selectedSeats.forEach(({row, col}) => {
        updatedHall[row][col].status = 'booked';
      })

      return {
        ...state,
        ticketHistory: {
          ...ticketHistory,
          [selectedDate]: {
            ...ticketHistory[selectedDate],
            [selectedTime]: updatedHall,
          }
        },
        selectedSeats: [],
      };
    },
  [types.SELECT_DATE]: (state, { date }) => {
    if (state.ticketHistory[date]) {
      return ({...state, selectedDate: date, selectedSeats: [] });
    }
    return ({
      ...state,
      ticketHistory: { ...state.ticketHistory, [date]: generateDataEntry() },
      selectedDate: date,
      selectedSeats: [],
    });
  },
  [types.SELECT_TIME]: (state, { time }) => {
    if (state.ticketHistory[state.selectedDate][time]) {
      return ({ ...state, selectedTime: time, selectedSeats: [], });
    }
    return ({
      ...state,
      ticketHistory: { ...state.ticketHistory, [state.selectedDate]: generateDataEntry() },
      selectedTime: time,
      selectedSeats: [],
    });
  },
  [types.SELECT_SEAT]: (state, { row, col }) => {
    return {
      ...state,
      selectedSeats: [
        ...state.selectedSeats,
        { row, col },
      ],
    };
  },
  [types.DESELECT_SEAT]: (state, { row, col }) => {
    return ({
      ...state,
      selectedSeats: state.selectedSeats.filter(seat => seat.row !== row || seat.col !== col)
    })
  }
};

const bookTicketsReducer = (state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default bookTicketsReducer;
