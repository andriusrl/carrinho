import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    /* margin-left: 10px; */
    margin: 10px 0 10px 10px;
`
export const Image = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid black;
    object-fit: unset;
    object-position: 50% 0%;
`
export const Description = styled.div`
    margin: 10px 10px 0 10px;
    h3{
        font-size: 10px;
    };
    p:nth-of-type(1){
        color: #d1d1d1;
        font-size: 11px;
    };
    p:nth-of-type(2){
        font-size: 14px;
    };
`
