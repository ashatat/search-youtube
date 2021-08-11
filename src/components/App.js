import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoLIst';
import VidDetail from './VidDetails';

class App extends Component {
  state = {
    videos: [],
    selectedVid: null
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video',
        videoCaption: 'closedCaption'
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVid: response.data.items[0]
    })
  }

  onVidSelect = (video) => {
    this.setState({ selectedVid: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VidDetail video={this.state.selectedVid} />
            </div>
            <div className="five wide column">
              <VideoList  onVidSelect={this.onVidSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
