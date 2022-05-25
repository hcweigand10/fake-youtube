import './App.css';
import React from 'react';
import SearchBar from './searchBar/SearchBar';
import Results from "./results/Results"
import VideoFeature from "./videoFeature/VideoFeature"
import youtube from "../api/youtube"

class App extends React.Component {
  state = {
    videos: [],
    featureIndex: 0
  }

  onSearch = async (term) => {
    const response = await youtube.get("", {
      params: {
        part: "snippet",
        maxResults: 6,
        q: term,
        type: "video"
      }
    })
    console.log("response",response.data.items)
    this.setState({videos:response.data.items, featureIndex: 0})
  }

  onSelect = (index) => {
    this.setState({...this.state.videos, featureIndex: index})
  }

  render() {
    return (
      <div className=''>
        <SearchBar onSearch={this.onSearch}/>
        <div>

        {this.state.videos.length > 0 ? (
          <div className='ui grid'>
              <div className='ten wide column'>
                <VideoFeature feature={this.state.videos[this.state.featureIndex]}/>
              </div>
              <div className='six wide column'>
                <Results results={this.state.videos} featureIndex={this.state.featureIndex} onSelect={this.onSelect}/>
              </div>
          </div> 
        ): null}
        </div>
      </div>
    )
  }
}

export default App;