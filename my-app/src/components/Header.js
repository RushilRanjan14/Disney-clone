import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
 position: fixed;
top: 0;
left: 0;
right: 0;
height : 70px;
background : #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
z-index: 3;
`

const Logo = styled.img`
text-align: center;
justify-content: center;
width : 100px;
max-height: 120px;
display: inline-block;
align-items: center;
margin : auto;

`