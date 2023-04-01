import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';

const options = [
  { id: 'b-01', state: 'good', caption: 'Гарно' },
  { id: 'b-02', state: 'neutral', caption: 'Нейтрально' },
  { id: 'b-03', state: 'bad', caption: 'Погано' },
];

export const App = () => {
  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  // const { good, neutral, bad } = feedback;
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = !countTotalFeedback
    ? 0
    : Math.round((good / countTotalFeedback) * 1000) / 10;

  const onIncrement = state => {
    // setFeedback(prevState => ({ ...prevState, [state]: prevState[state] + 1 }));
    switch (state) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
    }
  };

  return (
    <Container>
      <Section title="Залиште відгук">
        <FeedbackOptions options={options} onLeaveFeedback={onIncrement} />
      </Section>
      <Section title="Статистика">
        {!countTotalFeedback ? (
          <Notification message={'відгуків немає'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};
