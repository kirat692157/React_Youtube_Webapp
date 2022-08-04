import _ from 'lodash';
import React, {Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../Components/searchBar';
import VideoList from '../Components/VideoList';
import VideoDetail from '../Components/videoDesc';

const API_KEY = 'AIzaSyCJlAUCoUQq3fQq9t95WQYlE4EaLGvxr1I';


class App extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null 
        };
        this.videoSearch("Excuses X Attention");
    };
    
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos) => { 
            this.setState({
                videos:[videos[1],videos[2],videos[3],videos[4]],
                selectedVideo:videos[0]
            }); 
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return ( 
            <div>

                <div class='top'>
                    <span className='Search search_word'>Search</span>
                        <SearchBar onSearchTermChange={videoSearch} />
                </div>

                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} 
                />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('.container'));
