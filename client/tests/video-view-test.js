// import React from 'react';
// import { findDOMNode } from 'react-dom';
// import ReactTestUtils from 'react-addons-test-utils';
// import expect from 'expect';
// import App from '../components/App.js';
// import SearchBar from '../components/search-bar'
// import VideoView from '../components/video-view'
// import VideoList from '../components/video-list'
//import youTubeSearch from './you-yube-objects'

// describe('App', function () {
//   it("renders searchBar videoList and videoView ", function () {
//     const app = ReactTestUtils.renderIntoDocument(
//       <App />
//     )
//     const searchBar = ReactTestUtils.scryRenderedComponentsWithType(app, SearchBar)
//     const videoView = ReactTestUtils.scryRenderedComponentsWithType(app, VideoView)
//     const videoList = ReactTestUtils.scryRenderedComponentsWithType(app, VideoList)
//     expect(app).toExist()
//     expect(searchBar.length).toEqual(1)
//     expect(videoView).toExist()
//     expect(videoList).toExist()
//     expect(ReactTestUtils.isCompositeComponent(app)).toBe(true)
//   })

//   it('asynYouTube function call verification', (done) => {
//     const app = ReactTestUtils.renderIntoDocument(
//       <App />
//     )
//     app.asyncYouTube('hello', () => {
//       expect(app.state.term).toBeA('string')
//       done()
//     })
//   })
// })
