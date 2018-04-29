import React from 'react';
import PropTypes from 'prop-types';

function Photo(props){
    const post = props.post;
    return <figure> 
                <img src={post.imageLink} alt={post.description}/>
                <figcaption>
                    <p>{post.description}</p>
                </figcaption>
                <div className="btn-container">
                    <button className="remove-btn" onClick={()=>{
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
            </figure>
}

Photo.PropTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}
export default Photo;