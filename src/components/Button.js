import React, { Children } from 'react'

const button = (props) => {
  return (
    <div>
      <button className='button text-transform-uppercase'>{props.Children}</button>
    </div>
  )
}

export default button
