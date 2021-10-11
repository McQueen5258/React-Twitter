import React from 'react';
import ProfileHeader from './ProfileHeader';
import EngagementCounter from './EngagementCounter';

function TweetRow({ tweet }) {
  return (
    <div className="tweet__row">
      <ProfileHeader
        imageURL={tweet.imageURL}
        verified={tweet.verified}
        username={tweet.username}
        name={tweet.name}
      />
      <p>{tweet.tweet}</p>
      <EngagementCounter
        retweets={tweet.retweets}
        likes={tweet.likes}
      />
    </div>
  )
}

export default TweetRow
