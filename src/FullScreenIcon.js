import React, { Component} from 'react';

function openFullscreen() {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.mozRequestFullScreen) { /* Firefox */
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) { /* IE/Edge */
      document.body.msRequestFullscreen();
    }
  }
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

class FullScreenIcon extends Component{

    constructor(){
        super()

        this.state = {
            fullScreenCheck : false
        }
    }

    makeFullscreen = () =>{
        if(!this.state.fullScreenCheck){
            openFullscreen();
            let c = document.getElementsByClassName("Container")[0];
            c.style.left = 0;
            c.style.right = 0;
            c.style.top = 0;
            c.style.bottom = 0;
            c.style.width = 100 + "%";
            c.style.height = 100 + "%";
            this.setState
            ({
              fullScreenCheck : true
            })
    
            let containerButtons = document.getElementsByClassName("Container-Buttons")[0];
            containerButtons.style.height = 10 + "%"
          }
    
        else{
            closeFullscreen();
            let c = document.getElementsByClassName("Container")[0];
            let click = document.getElementsByClassName("Container-Click")[0];
            click.style.bottom = 17 + "%";
            if(window.innerWidth < 900){
              c.style.left = 10 + "%";
              c.style.width = 80 + "%";
            }
            else{
              c.style.left = 25 + "%";
              c.style.width = 50 + "%";
               
            }
            c.style.top = 20 +"%";
            c.style.height = 60 + "%";
            this.setState
            ({
              fullScreenCheck : false
            })
    
            let containerButtons = document.getElementsByClassName("Container-Buttons")[0];
            containerButtons.style.height = 15 + "%"
          }
    }

    exitFullscreen = ()=>{
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement){
          let c = document.getElementsByClassName("Container")[0];
          let click = document.getElementsByClassName("Container-Click")[0];
          click.style.bottom = 17 + "%";
          if(window.innerWidth < 900){
            c.style.left = 10 + "%";
            c.style.width = 80 + "%";          
          }
          else{
            c.style.left = 25 + "%";
            c.style.width = 50 + "%";           
          }         
            c.style.top = 20 +"%";
            c.style.height = 60 + "%";
    
            this.setState
            ({
              fullScreenCheck : false
            })
    
            let containerButtons = document.getElementsByClassName("Container-Buttons")[0];
            containerButtons.style.height = 15 + "%"
          }
      }

    componentWillMount(){
        document.addEventListener('fullscreenchange', this.exitFullscreen);
        document.addEventListener('webkitfullscreenchange', this.exitFullscreen);
        document.addEventListener('mozfullscreenchange', this.exitFullscreen);
        document.addEventListener('MSFullscreenChange', this.exitFullscreen);
    }

  render(){
    return(
        <i className ="fas fa-desktop" style = {{position:"absolute", top:"33%",right:"3%"}} onClick = {this.makeFullscreen} ></i>
      );
  }
}

export default FullScreenIcon