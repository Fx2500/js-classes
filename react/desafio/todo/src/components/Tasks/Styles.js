import styled from "styled-components"

export const Container = styled.div`;
display: flex;
align-items: flex-start;
justify-content: space-between;
height: 6rem;
margin-top: 0;
background: var(--blue);
padding: 1rem 2rem;
border-radius: 0.5rem;
margin-top: 2rem;
color: var(--white);
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const taskTitle = styled.h3`
font-size: 1.5rem;
`
export const taskDescription = styled.p`
font-size: 1rem;
`