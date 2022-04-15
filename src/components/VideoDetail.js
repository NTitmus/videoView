import React from 'react';


const details = (i) => {
    if(!i){
        return <div>Loading...</div>
    } else {
        return <div>{i.snippet.title}</div>
    }

}

const iframeSource = (s) => {
    if (!s){
        return <div>Nothing</div>
    } else {
        return <iframe title="video player" src={`https://www.youtube.com/embed/${s.id.videoId}`}/>
        
    }

}

const VideoDetail = ({video}) => {


    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        //<div>{video.snippet.title}</div>
        //<iframe src=videoSrc/>
        <div>
            <div className='ui embed'>
            
            <div>{iframeSource(video)}</div>
            </div>
            <div className='ui segment'>
        <h4 className='ui header'>{details(video)}</h4>
        <p>{video.snippet.description}</p>
        </div>
        </div>
    );
}
export default VideoDetail