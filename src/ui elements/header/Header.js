import React from 'react'


import HeaderLeft from './HeaderLeft'
import HeaderCenter from './HeaderCenter'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <div className='header'>
    <HeaderLeft />
    <HeaderCenter />
    <HeaderRight />
    </div>
  )
}

export default Header