import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hall from '../Hall';
import SelectInput from '../../components/SelectInput';

class BookTicketsView extends Component {
  handleDateChange = (e) => {
    const { selectDate } = this.props;
    selectDate(e.currentTarget.value);
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

    const dates = Object.keys(ticketHistory);
    const sessions = Object.keys(ticketHistory[selectedDate]);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form name="form">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-6">
                  <SelectInput
                    value={selectedDate}
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