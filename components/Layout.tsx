import Image from 'next/image';
import React from 'react';
import Header from '../assets/header.png'
import Footer from '../assets/footer.png'

const Layout = ({children}) => {
  return (
    <div style={{ flexDirection: 'column'}}>
      <Image src={Header} />
      {children}
      <Image src={Footer} />
    </div>
  )
}

export default Layout;