import React from 'react';
import { connect } from 'react-redux';
import * as bookTicketActions from '../../actions/bookTicketsActions';
import HallView from './HallView';

const HallContainer = props => (<HallView {...props} />);

function mapStateToProps(state) {
  const { selectedDate, selectedTime, selectedSeats, ticketHistory } = state.bookTicketsReducer;

  return {
    hall: ticketHistory[selectedDate][selectedTime],
    archieved: new Date(...selectedDate.split('/'), ...selectedTime.split(':')) <= new Date(),
    selectedSeats,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectSeat: (row, col) => dispatch(bookTicketActions.selectSeat(row, col)),
    deselectSeat: (row, col) => dispatch(bookTicketActions.deselectSeat(row, col)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HallContainer);
