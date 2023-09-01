import React from 'react'

const Grandparent = (props) => {
  return (
    <div> Grandparent
        <p>{props.count}</p>
    </div>
  )
}

export default Grandparent