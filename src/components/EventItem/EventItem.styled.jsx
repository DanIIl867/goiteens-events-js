import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 15px;
list-style: none;
width: 300px;
background-color: rgba(255, 152, 41, 0.1);
border: #ca6702 2px solid;
border-radius: 10px;
padding: 10px 0px 10px 15px;
`

export const ListTitle = styled.h3`
margin: 0px
`

export const ListText = styled.p`
margin: 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 5px;
`