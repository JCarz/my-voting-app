import React from 'react';

const FeedbackList = ({ feedbackList, onVote }) => {
  if (!feedbackList || feedbackList.length === 0) {
    return <p>No feedback available.</p>; // Display a message for empty feedback list
  }

  return (
    <div className="feedback-list">
      <h2 className='feedbackIdeas'>Feedback Ideas</h2>
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index}>
            <span>{feedback.text}</span>
            <button className='voteButton' onClick={() => onVote(index)}>Vote</button>
            <span>Votes: {feedback.votes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
