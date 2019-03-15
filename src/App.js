import React, { Component ,createRef} from 'react';
import './App.css';

import Title from './Title.js'
import Video from './Video.js'
import Buttons from './Buttons.js'
import ClickOnScreen from './ClickOnScreen.js'


class App extends Component {

  video = createRef()


  constructor(){
    super()

    this.state = {
      isPlaying : false,
      volume : 0.5,
      mute : false,
      videoCurrentTime : 0,
      videoDuration : 0
    }

    this.ChangePlaying = this.ChangePlaying.bind(this)
    this.UpdateSound = this.UpdateSound.bind(this)
    this.MuteSound = this.MuteSound.bind(this)
    this.UpdateProgressBar = this.UpdateProgressBar.bind(this)
  }

  ChangePlaying = () => {
    const video = this.video.current
    console.log(this.state.videoCurrentTime)
    console.log(this.state.videoDuration)
    if(this.state.isPlaying==true){
        video.pause()
       //icon on screen
        let icon = document.getElementsByClassName("imgOnScreen")[1];
        icon.style.visibility = "visible";
        icon.style.opacity = 0.7;
        setTimeout(function(){
          icon.style.visibility = "hidden";
          icon.style.opacity = "0";
      }, 1000);
      //
    }
    else{
        video.play()
      //icon om screen
        let icon = document.getElementsByClassName("imgOnScreen")[0];
        icon.style.visibility = "visible";
        icon.style.opacity = 0.7; 
        setTimeout(function(){
          icon.style.visibility = "hidden";
          icon.style.opacity = "0";  
      }, 1000);
      //
    }
    this.setState(prevState =>
      ({
        isPlaying :!(prevState.isPlaying)
      }));
  }


  UpdateSound = (event) =>{
    let volume = event.target;
    let videoElem = this.video.current

    if(volume.value !=0){
      videoElem.setVolume(volume.value/100)
      this.setState({
        volume : volume.value/100,
        mute : false
      })  
    }
    else{
      videoElem.setVolume(0)
        this.setState({
        volume : 0,
        mute : true
      })  
    }
                 
  }

  MuteSound = () =>{
    var videoElem = this.video.current

    if(this.state.mute){
      videoElem.setVolume(0.5)
      this.setState({
        volume : 0.5,
        mute: false
      }) 
    }
    else{
      videoElem.setVolume(0)
      this.setState({
        volume : 0,
        mute : true
      }) 
    }
    
  }

  UpdateCurrentTime = (param) =>{
      this.setState({
        videoCurrentTime : param
      })
  }

  SetVideoDuration = (param) =>{
    this.setState({
      videoDuration : parseInt(param)
    })
  }

  UpdatePlaying = (param) =>{
    this.setState({
      isPlaying : param
    })
  }


  UpdateProgressBar = (event) =>{
    var progBar = event.target
    let videoElem = this.video.current

    videoElem.setTime(progBar.value)
    this.setState({
      videoCurrentTime : progBar.value,
    })  
  }


  render() {
    return (
      <div className="Container" >
              <div>
                   <Title title="MAX - Lights Down Low feat. gnash (Official Video)" />
              </div> 

              <ClickOnScreen 
              handleChangePlaying = {this.ChangePlaying}
              />

              <div>
                   <Video 
                    ref={this.video}
                    volume = {this.state.volume}
                    UpdateCurrentTime = {this.UpdateCurrentTime}
                    UpdatePlaying = {this.UpdatePlaying}
                    SetVideoDuration = {this.SetVideoDuration}
                   />
              </div>

              <Buttons 
              isPlaying = {this.state.isPlaying}
              handleChangePlaying = {this.ChangePlaying}
              UpdateSound = {this.UpdateSound}
              mute = {this.state.mute}
              MuteSound = {this.MuteSound}
              volume = {this.state.volume}
              currentTime = {this.state.videoCurrentTime}
              videoDuration = {this.state.videoDuration}
              UpdateProgressBar = {this.UpdateProgressBar}

              />      
      </div>
    );
  }
}

export default App;
