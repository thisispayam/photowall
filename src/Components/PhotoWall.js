import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
function PhotoWall(props){
    return (
        <div className='photo-grid'>
           { props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>) } {/*accessing this method coming from App.js in all the photos */}
        </div>
    )
}

//installed prop-types --save, to use them
PhotoWall.PropTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;
