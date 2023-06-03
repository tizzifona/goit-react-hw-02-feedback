import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './App.module.css';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButton = e => {
    const option = e.target.name;

    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPercentage = () => {
    const total = this.totalFeedback(this.state);
    const positive = this.state.good;

    if (total > 0) {
      const result = Math.ceil((positive / total) * 100);
      return `${result}%`;
    }
    return '0%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.mainContainer}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedback(this.state) ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback(this.state)}
              percentage={this.countPercentage(this.state)}
            />
             : <Notification message='There is no feedback'/>}

        </Section>
      </div>
    );
  }
}
  export default App;
