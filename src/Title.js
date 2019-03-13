import React from 'react';

function Title (props){
    return(
          <div className = "Container-Titlu">
                <span className = "Text-Titlu">
                    {props.title}
                </span>
          </div>  
      );
  }

export default Title