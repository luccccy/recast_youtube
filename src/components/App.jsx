import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoList: exampleVideoData,
      currentVideo: false
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>Video Player</em><VideoPlayer /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList videos={this.state.VideoList}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;