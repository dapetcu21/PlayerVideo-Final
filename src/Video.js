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
    setVolume(param){
        this.video.current.volume = param;
    }
    setTime(param){
        this.video.current.currentTime = param;
    }

    componentDidMount() {
        let videoElem = this.video.current
    
        videoElem.onloadedmetadata = (event) => {
          this.props.SetVideoDuration(videoElem.duration) 
        }
    
        videoElem.ontimeupdate = (event) => {
          this.props.UpdateCurrentTime(videoElem.currentTime)
        }
    
        videoElem.onended = (event) => {
            this.props.UpdatePlaying(false)
        }
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