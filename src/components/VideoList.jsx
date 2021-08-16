// import App from './components/App.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from 'VideoListEntry.jsx';

var VideoList = () => (
  <div className="video-list">
    <div><h5><em>{exampleVideoData[0].snippet.title}</em><img src={exampleVideoData[0].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em>{exampleVideoData[1].snippet.title}</em> <img src={exampleVideoData[1].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em>{exampleVideoData[2].snippet.title}</em> <img src={exampleVideoData[2].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em>{exampleVideoData[3].snippet.title}</em> <img src={exampleVideoData[3].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em>{exampleVideoData[4].snippet.title}</em> <img src={exampleVideoData[4].snippet.thumbnails.default.url}/></h5></div>
    <VideoListEntry />
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
