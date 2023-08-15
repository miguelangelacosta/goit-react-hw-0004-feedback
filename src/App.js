import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Leave your feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

 export  default App;
