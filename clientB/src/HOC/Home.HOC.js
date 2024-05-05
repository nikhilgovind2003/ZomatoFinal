import React from 'react'
import {Routes, Route } from "react-router-dom"

// layout
import HomeLayout from '../Layout/Home.Layout'

const DefaultHOC = ({ component : Component , ...rest }) => {

  //component
  //props -> path exact
  return (
    <>
    <Routes>
        <Route 
          {...rest}
          component = {(props)=>(
            <HomeLayout>
              <Component {...props}/>
            </HomeLayout>
          )}
        />
    </Routes>
    </>
  )
}

export default DefaultHOC;