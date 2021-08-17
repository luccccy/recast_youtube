import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: {
        id: {videoId: null},
        snippet: {
          thumbnails: {default: {url: null }},
          title: null,
          description: null,
        }
      },
    };
  }


  getVideos(query) {
    searchYouTube(query, (data) => this.setState({videoList: data, currentVideo: data[0]}));
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>Search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em><VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList videos={this.state.videoList}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    searchYouTube('javascript', (data) => this.setState({videoList: data, currentVideo: data[0]}));
  }


}

export default App;