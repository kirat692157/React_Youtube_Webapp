import React from 'react';
import VideoListItem from './VideoListItem';
const VideoList = (props) => {
    const items = props.videos.map((e)=>{ return (
            <VideoListItem 
                key = {e.etag} 
                video={e} 
                onVideoSelect = {props.onVideoSelect}
            />); 
    });
    return (
        <ul className = "col-md-4 list-group">
            {items}
        </ul>
    );
}

export default VideoList;