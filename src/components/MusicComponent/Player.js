import React from 'react'

const Player = ({url}) => {
  return (
    <div>
        <audio src={url}/>
    </div>
  )
}

export default Player