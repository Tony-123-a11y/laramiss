import React from 'react'
import Heading from './Heading'
import Logo from './Logo'
import SmallHead from './SmallHead'


const SecondaryHeader = (props) => {
  return (
    <div className=' '>
      <Logo/>
      <SmallHead align={props.alignSmall} smallHeading={props.smallHeading}/>
      <Heading align={props.alignHead}   heading={props.heading}/>
    </div>
  )
}

export default SecondaryHeader
