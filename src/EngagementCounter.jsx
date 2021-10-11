import React from 'react'
import Icon from "./Icon";

function EngagementCounter({ retweets, likes }) {
  return (
    <div className="summary">
      <div className="subtext">
        <Icon type="rt" />
        {retweets}{retweets !== 0? 'K':null}
      </div>
      <div className="subtext">
        <Icon type="like" />
        {likes}{likes !== 0? 'K':null}
      </div>
    </div>
  )
}

export default EngagementCounter
