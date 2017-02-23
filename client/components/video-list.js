import React, { Component } from 'react'
import VideoListItem from './video-list-item'
export default class VideoList extends Component {
  constructor(props) {
    super(props)
  }
getList(){
    return this.props.videos.map((video) => {
      return (
        <VideoListItem video={video} key={video.etag} onVideoSelect={this.props.onVideoSelect} />
      )
    })
}
  render() {
    return (
      <div className="video-list">
      <ul>
        {this.getList()}
      </ul>
      </div>
    )
  }
}