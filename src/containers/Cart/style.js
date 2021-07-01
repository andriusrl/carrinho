import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        width: fit-content;
        font-size: 18px;
        font-weight: bolder;
    }
`
export const Division = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d1d1;
`
export const ProductWrapper = styled.div`
    width: 100%;
`
export const Total = styled.div`
    display: flex;
    width: 100%;
    padding: 5px 10px 5px 10px;
    justify-content: space-between;
`
export const FinishWrapper = styled.div`
    width: 100%;
    padding: 10px;
`
export const FinishButton = styled.button`
    background-color: #3a74f2;
    width: 100%;
    color: white;
    font-weight: 100;
    padding: 10px 0 10px 0;
    border: none;
    border-radius: 5px;
`