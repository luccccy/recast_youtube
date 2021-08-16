// import App from './components/App.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = () => (
  <div className="video-list" >
    <VideoListEntry url={exampleVideoData[0].snippet.thumbnails.default.url} title={exampleVideoData[0].snippet.title} description={exampleVideoData[0].snippet.description} />
    <VideoListEntry url={exampleVideoData[1].snippet.thumbnails.default.url} title={exampleVideoData[1].snippet.title} description={exampleVideoData[1].snippet.description} />
    <VideoListEntry url={exampleVideoData[2].snippet.thumbnails.default.url} title={exampleVideoData[2].snippet.title} description={exampleVideoData[2].snippet.description} />
    <VideoListEntry url={exampleVideoData[3].snippet.thumbnails.default.url} title={exampleVideoData[3].snippet.title} description={exampleVideoData[3].snippet.description} />
    <VideoListEntry url={exampleVideoData[4].snippet.thumbnails.default.url} title={exampleVideoData[4].snippet.title} description={exampleVideoData[4].snippet.description} />
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
