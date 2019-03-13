import React, { Component ,createRef} from 'react';
import './App.css';

import Title from './Title.js'
import Video from './Video.js'
import Buttons from './Buttons.js'


class App extends Component {

  video = createRef()


  constructor(){
    super()

    this.state = {
      isPlaying : false,
      volume : 0,
    }

    this.handleChangePlaying = this.handleChangePlaying.bind(this)
  }

  

  handleChangePlaying = () => {
        const video = this.video.current
 
        if(this.state.isPlaying==true){
            video.pause()
        }
        else{
            video.play()
        }

        this.setState(prevState =>
          ({
            isPlaying :!(prevState.isPlaying)
          }));
  }

  handleUpdateSound = () =>{
        const video = this.video.current
  }

  render() {
    return (
      <div className="Container">
              <div>
                   <Title title="MAX - Lights Down Low feat. gnash (Official Video)" />
              </div>   

              <div>
                   <Video 
                    ref={this.video}
                    volume = {this.state.volume}
                   />
              </div>

              <Buttons 
              isPlaying = {this.state.isPlaying}
              handleChangePlaying = {this.handleChangePlaying}
              />      
      </div>
    );
  }
}

export default App;
