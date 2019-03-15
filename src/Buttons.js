import React, { Component } from 'react';

import PlayButton from './PlayButton.js';
import FullScreenIcon from './FullScreenIcon.js';
import VolumeBar from './VolumeBar.js';
import VolumeIcon from './VolumeIcon.js';
import ProgressBar from './ProgressBar.js';
import Time from './Time.js'


class Buttons extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return(
          <div className = "Container-Buttons"> 
                <ProgressBar 
                currentTime = {this.props.currentTime}
                videoDuration = {this.props.videoDuration}
                UpdateProgressBar = {this.props.UpdateProgressBar}
                />
                <PlayButton 
                isPlaying = {this.props.isPlaying}
                handleChangePlaying = {this.props.handleChangePlaying}
                />	
                <VolumeIcon 
                volume = {this.props.volume}
                MuteSound = {this.props.MuteSound}
                mute = {this.props.mute}
                />
                <VolumeBar
                UpdateSound = {this.props.UpdateSound}
                />
                <Time 
                currentTime = {this.props.currentTime}
                videoDuration = {this.props.videoDuration}
                />
                <FullScreenIcon 
                /> 
          </div>
        );
    }
  }

  export default Buttons;