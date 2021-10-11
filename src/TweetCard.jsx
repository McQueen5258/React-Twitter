import React from "react";
import Icon from "./Icon";
import ProfileHeader from './ProfileHeader';
import EngagementCounter from './EngagementCounter';

const TweetCard = props => {
  //render verified icon
  function renderVerified(verified) {
    //TODO (TASK 1): render icon only if user is verified.
    //Call this function in renderHeader().
    return verified ? <Icon type={'verified'} /> : null;
  }

  //Header should contain avatar, name, username, and verified.
  function renderHeader() {
    //TODO (TASK 1): REPLACE ALL CAPS
    //1. Pass in avatar link as props for Image component.
    //2. Render the name and verified icon in the <h3> tags.
    //3. Render username.
    return (
      <div className="header">
        <img src={props.tweet.imageURL} />
        <div>
          <h3>
            {props.tweet.name} {renderVerified(props.tweet.verified)}
          </h3>
          <div className="subtext">{props.tweet.username}</div>
        </div>
      </div>
      // null //DELETE ME
    );
  }

  //Body should contain tweet and timestamp.
  function renderBody() {
    //TODO (TASK 2): REPLACE ALL CAPS
    return (
      <div>
        <h2>{props.tweet.tweet}</h2>
        <div className="subtext">{props.tweet.timestamp}</div>
      </div>
      // null //DELETE ME
    );
  }

  //Numbers should contain number of retweets and number of likes.
  function renderNumbers() {
    //TODO (TASK 3): Add retweets and likes in here!
    return (
      <div className="numbers">
        <h3>
          {props.tweet.retweets}
        </h3>
        <div className="subtext">
          Retweets
        </div>
        <h3>
          {props.tweet.likes}
        </h3>
        <div className="subtext">
          Likes
        </div>
      </div>
      // null //DELETE ME
    );
  }

  //Rounds a number to the nearest thousand.
  function roundToNearestThousand(value) {
    return null; //DELETE ME
  }

  //Summary should contain number of retweets and number of likes.
  function renderSummary() {
    //TODO (TASK 4): Render Retweets and Likes
    return (
      <div className="summary">
        <div className="subtext">
          <Icon type="rt" />
          5.2K
        </div>
        <div className="subtext">
        <Icon type="like" />
          1.9K
        </div>
      </div>
      // null //DELETE ME
    );
  }

  // ----- DON'T MODIFY BELOW -----
  return (
    <div className="App">
      <div className="top">
        {renderHeader()}
        <img
          src="https://uploads.codesandbox.io/uploads/user/5f7bcfab-93b0-47d6-ab75-e5a4dd7d5661/UxP3-follow.png"
          height="45px"
        />
      </div>
      {renderBody()}
      <hr />
      {renderNumbers()}
      <hr />
      {renderSummary()}
    </div>
  );
};

export default TweetCard;
// ----- DON'T MODIFY ABOVE -----
