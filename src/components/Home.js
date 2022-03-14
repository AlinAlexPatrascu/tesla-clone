import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title='Tesla S' 
        description='Order Online for Touchless Technology'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section 
        title='Tesla Y' 
        description='Order Online for Touchless Technology'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section 
        title='Tesla 3' 
        description='Order Online for Touchless Technology'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section 
        title='Tesla X' 
        description='Order Online for Touchless Technology'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section 
        title='Lower Cost Solar Panels in America' 
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section 
        title='Solar for New Roots' 
        description='Solar Roof Cost Less Than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section 
        title='Accessories' 
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`