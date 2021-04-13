import React from 'react';
import PropTypes from 'prop-types';

export default function WeekNumber({
  date,
  onClickWeekNumber,
  weekNumber,
  tileContent,
}) {
  const props = {
    className: 'react-calendar__tile',
    style: { flexGrow: 1 },
  };

  const children = (
    <span>
      {weekNumber}
    </span>
  );

  return (
    onClickWeekNumber
      ? (
        <button
          {...props}
          onClick={(event) => onClickWeekNumber(weekNumber, date, event)}
          type="button"
        >
          {children}
        </button>
      )
      : (
        <div {...props}>
          {children}
          <span>
            {tileContent({ date: date, view: 'week-number' })}
          </span>
        </div>
      )
  );
}

WeekNumber.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onClickWeekNumber: PropTypes.func,
  weekNumber: PropTypes.node.isRequired,
};
