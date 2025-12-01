import React from "react";

function Button(props){
  const {name, background} = props
  return(
    <button className={`${background} text-black rounded-sm`}>
        {name} 
    </button>
  )
}
export default Button