import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Con>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftbtntxt="Custom Order"
            rightbtntxt="Existing Inventory"
        />
        <Section
             title="Model Y"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftbtntxt="Custom Order"
             rightbtntxt="Existing Inventory"
        />
        <Section
             title="Model 3"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-3.jpg"
             leftbtntxt="Custom Order"
             rightbtntxt="Existing Inventory"
        />
        <Section
             title="Model X"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-x.jpg"
             leftbtntxt="Custom Order"
             rightbtntxt="Existing Inventory"
        />
        <Section
             title="Solar Panels"
             description="Lowest Cost Solar Panels in India"
             backgroundImg="solar-panel.jpg"
             leftbtntxt="Order On Real site"
             rightbtntxt="Keep Learning"
        />
        <Section
             title="Solar Roof"
             description="Produce Clean Energy From Your Roof"
             backgroundImg="solar-roof.jpg"
             leftbtntxt="Order On Real site"
             rightbtntxt="Keep Learning"
        />
        <Section
             title="Accessories"
             description=""
             backgroundImg="accessories.jpg"
             leftbtntxt="Shop Now"
        />
    </Con>
  )
}

export default Home
const Con =styled.div`
    height: 100vh;
`