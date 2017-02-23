import React, { Component } from 'react'
export default class VideoView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let url, title, description
    if (!this.props.video) {
      url = ''
      title = ''
      description = ''
    }
    else {
      url = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
      title = this.props.video.snippet.title
      description = this.props.video.snippet.description
    }

    return (
      <div className="video-view">
        <iframe src={url} height={"350px"} width={"500px"} />
        <h3>Title : {title}</h3>
        <h4>Description : {description}</h4>
      </div>
    )
  }
}