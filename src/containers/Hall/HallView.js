import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Seat from '../../components/Seat';

class HallView extends React.Component {
  clickHandler = (row, col) => () => {
    const { selectedSeats, selectSeat, deselectSeat } = this.props;
    if (selectedSeats.find(seat => seat.row === row && seat.col === col)) {
      deselectSeat(row, col);
      return;
    }
    selectSeat(row, col);
  }

  render() {
    const { hall, archieved, selectedSeats } = this.props;
    return (
      <React.Fragment>
        {hall.map((rowSeats, rowIndex) =>
          <div className="row justify-content-center" key={_.uniqueId()}>
            <React.Fragment>
            <div>Ряд {rowIndex}</div>
            {rowSeats.map((seat, colIndex) => {
                const selected = selectedSeats.find(
                  seat => seat.row === rowIndex && seat.col === colIndex
                );

                const selectable = !archieved && seat.status === 'free';
                const seatProps = { ...seat, status: selected ? 'selected' : seat.status, }

                return (
                  <Seat
                    key={_.uniqueId()}
                    onClick={selectable ? this.clickHandler(rowIndex, colIndex) : undefined}
                    {...seatProps}
                  />
                );
              })
            }
            </React.Fragment>
          </div>
        )}
      </React.Fragment>
    );
  }
}

HallView.propTypes = {
  hall: PropTypes.array.isRequired,
  selectedSeats: PropTypes.array.isRequired,
  archieved: PropTypes.bool.isRequired,
  selectSeat: PropTypes.func.isRequired,
  deselectSeat: PropTypes.func.isRequired,
};

export default HallView;
