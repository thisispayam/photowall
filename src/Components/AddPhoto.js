import React, {Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageUrl = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageUrl: imageUrl
        }
        if(description && imageUrl){
            this.props.onAddPhoto(post)
        }
    }

    render(){
        return (
            
            <div className="form">
                <h1>Photowall</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Image url" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto;