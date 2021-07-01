import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        width: fit-content;
        font-size: 18px;
        font-weight: 900;
    };
`
export const Title = styled.h2`
    margin: 10px 0 10px 0;
`
export const Division = styled.div`
    width: 100%;
    border-bottom: 1.5px solid #d1d1d1;
`
export const ProductWrapper = styled.div`
    width: 100%;
`
export const Total = styled.div`
    width: 100%;
    padding: 20px 15px 20px 15px;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;
    };
`
export const Congratulations = styled.p`
    align-self: center;
    background-color: #c7ffa6;
    color: #458212;
    width: 100%;
    font-size: 13px;
    font-weight: 600;
    padding: 5px;
    border-radius: 15px;
    text-align: center;
    margin-top: 15px;
`
export const FinishWrapper = styled.div`
    width: 100%;
    padding: 15px;
`
export const FinishButton = styled.button`
    background-color: #3a74f2;
    width: 100%;
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 0 10px 0;
    border: none;
    border-radius: 5px;
`