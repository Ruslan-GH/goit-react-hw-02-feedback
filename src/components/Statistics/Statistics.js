import React from 'react';
import './Statistics.css';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  counterFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  counterFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, b) => a + b, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return percentage;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.state.good === 0 ? 0 : this.countPositiveFeedbackPercentage();
    return (
      <div className="Feedback">
        <h3>Please leave your feedback</h3>
        <div className="FeedbackContainerButtons">
          <button
            type="button"
            className="FeedbackButtonGood"
            onClick={this.counterFeedbackGood}
          >
            Good
          </button>
          <button
            type="button"
            className="FeedbackButtonNeutral"
            onClick={this.counterFeedbackNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="FeedbackButtonBad"
            onClick={this.counterFeedbackBad}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <ul className="FeedbackContainerLabels">
          <li className="FeedbackLabelGood">Good: {this.state.good}</li>
          <li className="FeedbackLabelNeutral">
            Neutral: {this.state.neutral}
          </li>
          <li className="FeedbackLabelBad">Bad: {this.state.bad}</li>
        </ul>
        <ul className="CountContainerLabels">
          <li className="CountTotalFeedback">Total: {totalFeedback}</li>
          <li className="CountPositiveFeedbackPercentage">
            Positive Feedback: {positiveFeedbackPercentage} %
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
