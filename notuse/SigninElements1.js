// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// // My version
// export const Modal = styled.div`
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0, 0, 0, 0.5);
//   // display: none;
//   `;

// export const ModalContent = styled.div`
//   background: #f4f4f4;
//   margin: 10% auto;
//   width: 60%;
//   box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.2);
//   position: relative;
//   border-radius: 3px;
//   min-height: 500px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   `;

// export const CloseBtn = styled.span`
// position: absolute;
// top: 2%;
// right: 3%;
// font-size: 1.5;
// z-index: 1;

// &:hover {
//   cursor: pointer;
//   color: red;
//   transition: 0.2s ease-out;
// }
// `;

// export const ModalLeft = styled.div`
//   background: linear-gradient(90deg, rgba(247, 74, 70,1) 0%, rgba(236, 43, 0, 1) 100%);
//   border-radius: 0 3px 3px 0;
//   position: relative;
//   `;
  
// export const ModalImg = styled.img`
//   img: require('src\images\pic2.svg');
//   width: 80%;
//   height: 80%;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
// `;


// export const ModalRight = styled.div`
//   border-radius: 0 3px 3px 0;
//   position: relative;
//   `;





// Another Version

// export const Container = styled.div`
//   min-height: 692px;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   top: 0;
//   z-index: 0;
//   overflow: hidden;
//   background: linear-gradient(
//     108deg,
//     rgba(1, 147, 86, 1) 0%,
//     rgba(10, 201, 122, 1) 100%
//   );
// `;

// export const FormWrap = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media screen and (max-width: 400px) {
//     height: 80%;
//   }
// `;

// export const Icon = styled(Link)`
//   margin-left: 32px;
//   margin-top: 32px;
//   text-decoration: none;
//   color: #fff;
//   font-weight: 700;
//   font-size: 32px;

//   @media screen and (max-width: 480px) {
//     margin-left: 16px;
//     margin-top: 8px;
//   }
// `;

// export const FormContent = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media screen and (max-width: 480px) {
//     padding: 10px;
//   }
// `;

// export const Form = styled.form`
//   background: #010101;
//   max-width: 400px;
//   height: auto;
//   width: 100%;
//   z-index: 1;
//   display: grid;
//   margin: 0 auto;
//   padding: 80px 32px;
//   border-radius: 4px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

//   @media screen and (max-width: 400px) {
//     padding: 32px 32px;
//   }
// `;

// export const FormH1 = styled.h1`
//   margin-bottom: 40px;
//   color: #fff;
//   font-size: 20px;
//   font-weight: 400;
//   text-align: center;
// `;

// export const FormLabel = styled.label`
//   margin-bottom: 8px;
//   font-size: 14px;
//   color: #fff;
// `;
// export const FormInput = styled.input`
//   padding: 16px 16px;
//   margin-bottom: 32px;
//   border: none;
//   border-radius: 4px;
// `;

// export const FormButton = styled.button`
//   background: #01bf71;
//   padding: 16px 0;
//   border: none;
//   border-radius: 4px;
//   color: #fff;
//   font-size: 20px;
//   cursor: pointer;
// `;
// export const Text = styled.span`
//   text-align: center;
//   margin-top: 24px;
//   color: #fff;
//   font-size: 14px;
// `;
