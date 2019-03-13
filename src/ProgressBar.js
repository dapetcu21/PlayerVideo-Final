import React from 'react'

export default function ProgressBar(props) {
  return (
    <input type="range" min = "0" max = "100"  range = "100"  defaultValue="0"  className = "bar" ></input>
  )
}