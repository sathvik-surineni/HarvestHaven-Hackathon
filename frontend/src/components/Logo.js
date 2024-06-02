import React from 'react'
import logo from '../components/Harvest Haven.svg'
const Logo = ({w,h}) => {
  return (
<>  
<img src={logo} alt="Harvest Haven" width={w} height={h} />
</>
  )
}

export default Logo