import React from 'react'

const Card = ({image}) => {
  return (
    <div>
        <img src={require(`../images/${image}.jpg`)} alt="img not found" />
    </div>
  )
}

export default Card;