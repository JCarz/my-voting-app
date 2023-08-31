import React, { useState } from 'react';

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') return; // Prevent submitting empty feedback
    onFeedbackSubmit(feedback);
    setFeedback('');
  };

  return (
    <div className="feedback-form">
      <h2 className='feedBackTitle'>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
