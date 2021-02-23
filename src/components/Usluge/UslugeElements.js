import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const Usluge1 = styled.div `
padding: 4rem;
background: red;
margin-bottom: 24px;

`
export const UslugeContainer = styled.div `
 height: 100vh;
 display: flex;
 flex-direction: column;
 /* flex-flow: column wrap; */
 justify-content: center;
 align-items: center;
 background: #010606;
 margin-left: -8px;
 margin-right: -8px;
 

 @media screen and (max-width: 768px) {
     height: 1100px
 };

 @media screen and (max-width: 480px) {
     height: 2000px
 };
`

export const UslugeWrapper = styled.div `
 max-width: 1000px;
 max-height: 2000px;
 position: relative;
 margin: 50px 0 45px;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 12px;
 padding: 0 50px;

 @media screen and (max-width: 1000px) {
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px) {
     grid-template-columns: 1fr;
     padding: 0 20px;
     
     
 }
`

export const UslugeCard = styled.div `
 background: #fff;
 display: flex;
 flex: 1;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 340px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover {
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }
`

export const UslugeIcon = styled.img `
 height: 160px;
 width: 160px;
 margin-bottom: 10px;
`

export const UslugeH1 = styled.h1 `
 font-size: 2.5 rem;
 color: #fff;
 margin-bottom: 64px;

 @media screen and (max-width: 480px) {
     font-size: 2rem;
 }
`

export const UslugeH2 = styled.h2 `
 font-size: 1rem;
 margin-bottom: 10px;

`

export const UslugeP = styled.p `
 font-size: 1rem;
 text-align: center;
`


export const BtnWrap = styled.div `
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
 font-size: 20px;
`