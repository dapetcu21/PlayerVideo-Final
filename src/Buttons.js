import React, { Component } from 'react';

import PlayButton from './PlayButton.js';
import FullScreenIcon from './FullScreenIcon.js';
import VolumeBar from './VolumeBar.js';
import VolumeIcon from './VolumeIcon.js';
import ProgressBar from './ProgressBar.js';


class Buttons extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return(
          <div className = "Container-Buttons"> 
                <ProgressBar />
                <PlayButton 
                isPlaying = {this.props.isPlaying}
                handleChangePlaying = {this.props.handleChangePlaying}
                />	
                <VolumeIcon />
                <VolumeBar />
                <FullScreenIcon 
                /> 
          </div>
        );
    }
  }

  export default Buttons;