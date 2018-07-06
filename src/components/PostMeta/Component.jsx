import React from "react"
import Moment from "react-moment"
import classNames from "classnames"
import "./PostMeta.css"

class PostMeta extends React.Component {
  render() {
    const timeToRead = this.props.timeToRead
    const postDate = Date.parse(this.props.postDate, "YYYY-MM-dd")
    const metaClasses = classNames("post-meta", this.props.orientation)

    return (
      <div className={metaClasses}>
        posted <Moment date={postDate} fromNow />
        {" on "}
        <Moment date={postDate} format="ddd, D MMMM YYYY" /> (Est. {timeToRead}{" "}
        minute read)
        <hr />
      </div>
    )
  }
}

export default PostMeta
