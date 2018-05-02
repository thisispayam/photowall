import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import '../styles/styles.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      posts: [{
          id: 0,
          description: "Temple!",
          imageUrl: "https://payam.ca/img/portfolio/photo/2.jpg"
        }, {
          id: 1,
          description: "Tokyo Tower View!!",
          imageUrl: "https://payam.ca/img/portfolio/photo/5.jpg"
        }, {
          id: 2,
          description: "Monkeys on vacation!",
          imageUrl: "https://payam.ca/img/portfolio/photo/6.jpg"
        }, {
          id: 3,
          description: "Swimming!",
          imageUrl: "https://payam.ca/img/portfolio/photo/7.jpg"
        }, {
          id: 4,
          description: "Mr. Lizard",
          imageUrl: "https://payam.ca/img/portfolio/photo/8.jpg"
        }, {
          id: 5,
          description: "Kimono Exhibition!",
          imageUrl: "https://payam.ca/img/portfolio/photo/9.jpg"
        }, {
          id: 6,
          description: "Sand Riding!",
          imageUrl: "https://payam.ca/img/portfolio/photo/10.jpg"
        }, {
          id: 7,
          description: "Praying Kids!",
          imageUrl: "https://payam.ca/img/portfolio/photo/1.jpg"
        }, {
          id: 8,
          description: "Stonehenge!",
          imageUrl: "https://payam.ca/img/portfolio/photo/11.jpg"
        }, {
          id: 9,
          description: "Venice!",
          imageUrl: "https://payam.ca/img/portfolio/photo/12.jpg"
        }, {
          id: 10,
          description: "Towers!",
          imageUrl: "https://payam.ca/img/portfolio/photo/4.jpg"
        }]
    }
    this.removePhoto = this.removePhoto.bind(this);

  }

  removePhoto(postRemoved){
    console.log(postRemoved.description);
    this.setState((state)=>({
    posts: state.posts.filter(post => post !== postRemoved) /*filtering out the removedPost from the array --- render() will call again right after*/
    }))
  }

  addPhoto(postSubmitted){
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }))
  }

  render() {
    return (
      <div className="App">
      {/* multiple components in a div use render prop to route  */}
        <Route exact path = "/" render={() => (
            <div>
              <header className="App-header">
                <Title title={'Photowall'} />
              </header>
              <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> {/*passing the removePhoto function as prop to photowall */} 
            </div>
        )} />

        {/* <Route path ="/AddPhoto" component = {AddPhoto} /> single component use component prop to render */}
       
        <Route path="/AddPhoto" render={({history}) => (
          <AddPhoto onAddPhoto={(addedPost) => {
              this.addPhoto(addedPost);
              history.push('/'); {/*going back to the home page after submit*/}
            }} />
        )} />

      </div>
      
    );
  }
}

export default App;
