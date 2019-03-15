import React ,{createRef} from 'react'

export default function volumeBar(props) {
  return (
    <div className = "ContainerVolume">
          <input 
          type="range" 
          min = "0" 
          max = "100" 
          range = "100" 
          className = "volumeBar" 
          onMouseUp = {props.UpdateSound}
          ></input>
     </div> 
  )
}