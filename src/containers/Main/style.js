import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    button{
        height: 66px;
        font-weight: 600;
        font-size: 20px;
    };
    button:nth-of-type(1){
        color: red;
    };
    button:nth-of-type(2){
        color: blue;
    };
`