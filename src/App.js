import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  // counterFeedbackGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // counterFeedbackNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // counterFeedbackBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

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
      <Section title=" ☕️ Сafe ''Expresso'' ☕️">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.counterFeedback}
          // counterFeedbackGood={this.counterFeedbackGood}
          // counterFeedbackNeutral={this.counterFeedbackNeutral}
          // counterFeedbackBad={this.counterFeedbackBad}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message=" 🤷‍♂️ There is no feedback 🤷‍♂️ " />
        )}
      </Section>
    );
  }
}

export default App;
