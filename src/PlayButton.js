import React, { Component , createRef} from 'react';

class PlayButton extends Component{
    constructor(props){
        super(props)
    }

  render(){
    return(
        <i className ={this.props.isPlaying ? "fas fa-pause":"fas fa-play"} onClick={this.props.handleChangePlaying} style = {{marginLeft:"4%"}}></i>
      );
  }
}

export default PlayButton


