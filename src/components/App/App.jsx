import React, { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countPositiveFeedbackPercentage(total, good) {
    if (!total) {
      return 0;
    }
    return Math.round((good * 100) / total);
  }

  render() {
    
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const increment = this.incrementFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={increment} />
        </Section>

        {total ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </div>
    );
  }
}

export default App;
