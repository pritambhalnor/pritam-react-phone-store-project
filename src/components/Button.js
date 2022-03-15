import styled from "styled-components";

export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
color:var(--lightblue);
border:0.05rem solid var(--lightblue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
border-color:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
color:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
cursor:pointer;
margin:0.2rem 0.5rem 0,2rem 0rem;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props=>props.cart?"var(--mainyellow)":"var(--lightblue)"};
  color:var(--mainblue);
}
&:focus{
  Outline:none;
}
`;