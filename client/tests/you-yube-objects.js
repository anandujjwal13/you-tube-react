import YTSearch from 'youtube-api-search'
const key = 'AIzaSyAkKDJNvcDaRYWO23vNi15t7NmACmWIYck'
let youTubeSearch = (term, cb) => {
  YTSearch({ key:'AIzaSyAkKDJNvcDaRYWO23vNi15t7NmACmWIYck', term }, (videos) => {
    cb(videos)
  })
}
export default youTubeSearch