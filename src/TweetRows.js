import React from 'react';
import TweetRow from './TweetRow';

function TweetRows({ tweets, onSelectTweet }) {
  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div>
            <TweetRow tweet={tweet} />
          </div>
        );
      })}
    </div>
  )
}

export default TweetRows;
