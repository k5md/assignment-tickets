import React from 'react';
import { connect } from 'react-redux';
import * as bookTicketActions from '../../actions/bookTicketsActions';
import BookTicketsView from './BookTicketsView';

const BookTicketsContainer = props => (<BookTicketsView {...props} />);

function mapStateToProps(state) {
  return { ...state.bookTicketsReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    bookTickets: (date, time, seats) => dispatch(bookTicketActions.bookTickets(date, time, seats)),
    selectDate: date => dispatch(bookTicketActions.selectDate(date)),
    selectTime: time => dispatch(bookTicketActions.selectTime(time)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookTicketsContainer);
