import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  counterFeedbackGood,
  counterFeedbackNeutral,
  counterFeedbackBad,
}) => (
  <div>
    <h3>Please leave your feedback</h3>
    <div className={s.FeedbackContainerButtons}>
      <button
        type="button"
        className={s.FeedbackButtonGood}
        onClick={counterFeedbackGood}
      >
        Good
      </button>
      <button
        type="button"
        className={s.FeedbackButtonNeutral}
        onClick={counterFeedbackNeutral}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.FeedbackButtonBad}
        onClick={counterFeedbackBad}
      >
        Bad
      </button>
    </div>
  </div>
);

FeedbackOptions.propTypes = {
  counterFeedbackGood: PropTypes.func,
  counterFeedbackNeutral: PropTypes.func,
  counterFeedbackBad: PropTypes.func,
};

export default FeedbackOptions;
