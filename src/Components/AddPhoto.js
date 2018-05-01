import React, {Component} from 'react';

class AddPhoto extends Component {
    render(){
        return (
            
            <div className="form">
                <h1>Photowall</h1>
                <form>
                    <input type="text" placeholder="Image url" />
                    <input type="text" placeholder="Description" />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto;