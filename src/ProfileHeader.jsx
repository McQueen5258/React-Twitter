import React from 'react'
import Icon from "./Icon";

function ProfileHeader({ imageURL, name, verified, username}) {
  
  function renderVerified(verified) {
    return verified ? <Icon type={'verified'} /> : null;
  }

  return (
    <div className="header">
      <img src={imageURL} />
        <div>
          <h3>
            {name} {renderVerified(verified)}
          </h3>
          <div className="subtext">@{username}</div>
        </div>
    </div>
  )
}

export default ProfileHeader
