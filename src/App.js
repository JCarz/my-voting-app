import React, { useState } from 'react';
import Header from './header';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbackList([...feedbackList, { text: feedback, votes: 0 }]);
  };

  const handleVote = (index) => {
    const updatedFeedbackList = [...feedbackList];
    updatedFeedbackList[index].votes += 1;
    setFeedbackList(updatedFeedbackList);
  };

  return (
    <div className="app">
      <Header />
      <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbackList={feedbackList} onVote={handleVote} />
      <Footer />
    </div>
  );
};

export default App;
