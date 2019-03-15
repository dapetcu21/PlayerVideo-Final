import React, { Component , createRef} from 'react';
import pause from './pauseButton.png'
import play from './playButton.png'

class ClickOnScren extends Component{  
    render(){
        return( 
            <div className = "Container-Click" onClick = {this.props.handleChangePlaying}>
                    <div className = "MsgOnScreen">
                      <img src = {play} className = "imgOnScreen"></img>
                    </div>

                    <div className = "MsgOnScreen">
                      <img src = {pause} className = "imgOnScreen"></img>
                    </div>   
              </div>
          );
      }
    }
    
export default ClickOnScren
  