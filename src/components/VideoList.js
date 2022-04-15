import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVidSelect}) => {

    const renderedList = videos.map((v) => {return <VideoItem key={v.id.videoId} video={v} onVSelect={onVidSelect}/>})
    //console.log(vids)

    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    );
}
export default VideoList