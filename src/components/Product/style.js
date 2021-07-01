import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`
export const Image = styled.img`
    /* object-fit: none;
    object-position: center; */
    width: 80px;
    height: 80px;
    border: 1px solid black;
    object-fit: unset;
    object-position: 50% 0%;
`
export const ImageDiv = styled.div`
    width: fit-content;
`
export const Description = styled.div`
    margin-left: 14px;
    margin-right: 14px;
    h3{
        font-size: 10px;
    }
`