import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
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
            <div><h5><em>videoPlayer</em><VideoPlayer /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;