import React from "react";
import { Redirect } from "react-router-dom"
import { Wrapper } from "./style";
import { PageValue } from "../../providers/PageValue"
import down from "../../mocks/down.json"
import up from "../../mocks/up.json"

function Main() {
  const { pageValue, setPageValue } = PageValue()
  console.log(pageValue)

  const changePage = (cart)=>{
    setPageValue({
      page: "Cart",
      cart: cart
    })
  }

  if (pageValue.page !== "Main"){
    return <Redirect to="carrinho" /> 
  }

    return (
      <Wrapper>
        <button onClick={()=>{changePage(down)}} >Abaixo de 10 reais (sem frete)</button>
        <button onClick={()=>{changePage(up)}} >Acima de 10 reais (com frete)</button>
      </Wrapper>
    );
}

export default Main;