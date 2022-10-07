import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftbtntxt,rightbtntxt}) {
  return (
    <Wrap bgimg={backgroundImg}>
        <Fade bottom>
            <Itemtxt>
                <h1>{title}</h1>
                <p>{description}</p>
            </Itemtxt>
        </Fade>
        <Buttons>
            <Fade bottom>
            <Buttongrp>
                <Leftbtn>
                    {leftbtntxt}
                </Leftbtn>
                {rightbtntxt && 
                    <Rightbtn>
                        {rightbtntxt}
                    </Rightbtn>
                }
            </Buttongrp>
            </Fade>
            <Downarr src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-image: url('images/model-s.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props =>`url("images/${props.bgimg}")`};
`
const Itemtxt=styled.div`
    padding-top: 15vh;
`
const Buttongrp=styled.div`
    display: flex;
    margin-bottom: 25px;
    @media (max-width: 760px){
        flex-direction: column;
    }
`
const Leftbtn=styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.75;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const Rightbtn=styled(Leftbtn)`
    background-color: white;
    color: black;
    opacity: 0.45;
`
const Downarr=styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons=styled.div`

`
