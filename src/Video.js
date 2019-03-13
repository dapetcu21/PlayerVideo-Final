import React, { Component , createRef} from 'react';
import video from './video.mp4';


class Video extends Component{

    video = createRef()

    play() {
        this.video.current.play();
      }
    
    pause() {
        this.video.current.pause();
    }

  render(){
    return(
          <div className = "Container-Video">
              <video className = "vid"  ref = {this.video}>
                  <source src={video} type="video/mp4" ></source> 
              </video>   
          </div> 
      );
  }
}

export default Video