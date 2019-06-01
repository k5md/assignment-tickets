import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hall from '../Hall';
import SelectInput from '../../components/SelectInput';
import { getDisplayedDate, getRealDate } from '../../utils/dates';

class BookTicketsView extends Component {
  handleDateChange = (e) => {
    const { selectDate } = this.props;
    // options values represent human-readable dates, with months counted from 0
    // convert it to 'real' dates before saving
    const displayedDate = e.currentTarget.value;
    const realDate = getRealDate(displayedDate);
    selectDate(realDate);
  }

  handleTimeChange = (e) => {
    const { selectTime } = this.props;
    selectTime(e.currentTarget.value);
  }

  handleBookTickets = () => {
    const { bookTickets } = this.props;
    bookTickets();
  }

  render() {
    const {
      selectedDate,
      selectedTime,
      ticketHistory,
    } = this.props;

    // months in selectedDate start from 0
    const displayedDate = getDisplayedDate(selectedDate);
    const dates = Object.keys(ticketHistory).map(getDisplayedDate);
    const sessions = Object.keys(ticketHistory[selectedDate]);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form name="form">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-6">
                  <SelectInput
                    value={displayedDate}
                    label="Выберите дату:"
                    onChange={e => this.handleDateChange(e)}
                    selectables={dates}
                  />
                </div>

                <div className="col-md-6">
                  <SelectInput
                    label="Выберите сеанс:"
                    value={selectedTime}
                    onChange={e => this.handleTimeChange(e)}
                    selectables={sessions}
                  />
                </div>
              </div>

              <div className="row mb-4 justify-content-center">
                <div className="col">
                  <Hall/>
                </div>
              </div>

              <div className="row justify-content-center">
                <input
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                  value="Заказать"
                  onClick={this.handleBookTickets}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BookTicketsView.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  selectedTime: PropTypes.string.isRequired,
  ticketHistory: PropTypes.shape({}).isRequired,
  selectTime: PropTypes.func.isRequired,
  selectDate: PropTypes.func.isRequired,
  bookTickets: PropTypes.func.isRequired,
};

export default BookTicketsView;