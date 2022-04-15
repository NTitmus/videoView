import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoDetail2 from './VideoDetail2';

class App extends React.Component{
    state={videos: [], selectedVideo: null}

    onTermSubmit = async (term) => {
        //const response = await Youtube.get()
        const allowed = ['car', 'cars', 'beach']
        if (allowed.includes(term)){
        const response = await Youtube.get('/search', {params: {q: term}})
        //console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        }
    }

    onVideoSelect = (video) =>{
        //console.log('From the app!', video);
        this.setState({selectedVideo: video});
    }

    //componentDidMount(){
    //    this.onTermSubmit('cars')
    //}
//<VideoDetail video={this.state.selectedVideo}/>
    render(){
        return(
            <div>
                <SearchBar onUserSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                <VideoDetail2 video={this.state.selectedVideo}/>
                </div>
                <div className='five wide column'>
                <VideoList videos={this.state.videos} onVidSelect={this.onVideoSelect}/>
                </div>
                </div>
                </div>
            </div>
        );
    }

}
export default App