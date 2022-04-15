import React from 'react';

const vidOption = (vid) => {
    if (!vid){
        const vidInfo = {
            iframeVid: <div>Nothing</div>,
            titleVid: <div>No title</div>,
            descVid: <div>No description</div>
        
        }
        return vidInfo
    } else {
        const videoSrc = `https://www.youtube.com/embed/${vid.id.videoId}`
        const vidInfo = {
            iframeVid: <iframe src={videoSrc} />,
            titleVid: <h4 className='ui header'>{vid.snippet.title}</h4>,
            descVid: <p>{vid.snippet.description}</p>
        }
        return vidInfo
    }
    
}



const VideoDetail2 = ({video}) => {
    return(

        <div>
            <div className='ui embed'>
            
            {vidOption(video).iframeVid}
            </div>
            <div className='ui segment'>
        {vidOption(video).titleVid}
        {vidOption(video).descVid}
        </div>
        </div>
    );
}
export default VideoDetail2