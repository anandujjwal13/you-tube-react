import React, { Component } from 'react'
export default class VideoListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let imageUrl = this.props.video.snippet.thumbnails.default.url
    return (
      <li onClick = {()=>{this.props.onVideoSelect(this.props.video)}}>
        <img src={imageUrl} />
        <div>
          {this.props.video.snippet.title}
        </div>
      </li>
    );
  }
}