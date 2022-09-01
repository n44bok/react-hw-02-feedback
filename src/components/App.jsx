import { Component } from 'react';

import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 
  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      }
    })
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedBackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total ? ((good / total) * 100).toFixed(0) : 0;
    return Number(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedBackPercentage();

    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {!total ? (<Notification message='There is no feedback' />) :
            (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />)}
        </Section>
      </>
    )
  }
}





