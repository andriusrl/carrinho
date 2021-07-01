import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 15px 0 15px 15px;
`
export const Image = styled.img`
    width: 80px;
    height: 80px;
    border: 1.5px solid #d1d1d1;
`
export const Description = styled.div`
    margin: 10px 0 0 15px;
    width: 75%;
    h3{
        font-size: 12px;
    };
    p:nth-of-type(1){
        color: #d1d1d1;
        font-size: 11px;
    };
    p:nth-of-type(2){
        color: black;
        font-size: 14px;
    };
`
