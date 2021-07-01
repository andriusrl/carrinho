import React from "react";
import { Redirect } from "react-router-dom"
import { PageValue } from "../../providers/PageValue"
import { Division, ProductWrapper, Wrapper, Total, FinishButton, FinishWrapper, Congratulations, Title } from "./style";
import Product from "../../components/Product";

function Cart() {
  const { pageValue, setPageValue } = PageValue()

  const changePage = ()=>{
    setPageValue({
      page: "Main"
    })
  }

  if (pageValue.page !== "Cart") {
    return <Redirect to="/" />
  }
  return (
    <Wrapper>
      <Title>
        Meu carrinho
      </Title>
      <Division />
      <ProductWrapper>
        {
          pageValue.cart.items.map((product) => {
            return (
              <Product
                key={product.productId}
                image={product.imageUrl}
                name={product.name}
                price={product.price}
                sellingPrice={product.sellingPrice}
              />
            )
          })
        }
      </ProductWrapper>
      <Division />
      <Total>
        <div>
          <h2>Total</h2>
          <h2>R$ {(pageValue.cart.value / 100).toFixed(2)}</h2>
        </div>
        {pageValue.cart.value >= 1000 ? <Congratulations>Parabéns, sua compra tem frete grátis !</Congratulations> : false}
      </Total>
      <Division />
      <FinishWrapper>
        <FinishButton onClick={changePage}>Finalizar compra</FinishButton>
      </FinishWrapper>
    </Wrapper >
  );
}

export default Cart;