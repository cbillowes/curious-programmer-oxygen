import React, { Component } from "react"
import { Mention } from "react-twitter-widgets"
import "./UserInfo.css"

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config
    const { expanded } = this.props
    return (
      <div className="user-info">
        <Mention
          username={userTwitter}
          options={{
            count: expanded ? true : "none",
            size: "large"
          }}
        />
      </div>
    )
  }
}

export default UserInfo
