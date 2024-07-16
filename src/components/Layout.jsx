import React from 'react'
import Home from './Home';
import Racipes from './Racipes';
import Feature from './Feature';

const Layout = ({recipe}) => {
  return <>
    <Home />
    <Racipes recipe={recipe} />
    <Feature />
  </>
}

export default Layout 