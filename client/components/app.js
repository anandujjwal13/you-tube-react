import React, { Component } from 'react'
import SearchBar from './search-bar'
import VideoView from './video-view'
import VideoList from './video-list'
import YTSearch from 'youtube-api-search'
const key = 'AIzaSyAkKDJNvcDaRYWO23vNi15t7NmACmWIYck'
export default class App extends Component {
  constructor() {
    super()
    this.state = { term: 'coke studio', videos: [], selectedVideo: null }
    this.asyncYouTube(this.state.term)
  }

  asyncYouTube(term,callBack) {
    YTSearch({ key, term }, (videos) => {
      this.setState({ term, videos, selectedVideo: videos[0] })
      callBack()
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <hr/>
        <SearchBar onTermChange={(term) => { this.asyncYouTube(term) }} />
        <hr />
        <div id="flex">
          <VideoView video={this.state.selectedVideo} />
          <hr />
          <VideoList videos={this.state.videos} onVideoSelect={(video) => { this.setState({ selectedVideo: video }) }} />
        </div>
      </div>
    )
  }
}