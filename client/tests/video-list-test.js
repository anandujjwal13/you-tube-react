import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import VideoList from '../components/video-list'
import VideoListItem from '../components/video-list-item'
import youTubeSearch from './you-yube-objects'
describe('<VideoList />', function () {
  it("should render 5 <VideoListItem/> ", function (done) {
    youTubeSearch('hello', (data) => {
      const videoList = ReactTestUtils.renderIntoDocument(
        <VideoList videos={data} onVideoSelect={() => { }} />
      )
      console.log(data)
      const videoListItem = ReactTestUtils.scryRenderedComponentsWithType(videoList, VideoListItem)
      expect(videoList).toExist()
      expect(videoListItem.length).toEqual(5)
      expect(ReactTestUtils.isCompositeComponent(videoListItem)).toBe(true)
      done()
    })
  }).timeout(5000)
})
