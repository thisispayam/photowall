import React from 'react';
import Photo from './Photo';

function PhotoWall(props){
    return (
        <div className='photo-grid'>
           { props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>) } {/*accessing this method coming from App.js in all the photos */}
        </div>
    )
}

export default PhotoWall;
