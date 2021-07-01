import React from "react";
import { PageValue } from "../../providers/PageValue"
import { Division, ProductWrapper, Wrapper, Total, FinishButton, FinishWrapper } from "./style";

// import up from "../../mocks/up.json"
import Product from "../../components/Product";


function Cart() {
  const { pageValue, setPageValue } = PageValue()
  console.log(pageValue)

  // console.log(up)
  return (
    <Wrapper>
      <h2>
        Meu carrinho
      </h2>
      <Division />
      <ProductWrapper>
        {
          pageValue.cart.items.map((product) => { //TROCAR DEPOIS PELA VARIAVEL "up" QUE VEM DO PROVIDER
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
        <h2>Total</h2>
        <h2>R$ {(pageValue.cart.value/100).toFixed(2)}</h2>
        {/* TROCAR VARIAVEL "UP QUEM VEM DO PROVIDER" */}
      </Total>
      <Division />
      <FinishWrapper>
        <FinishButton>Finalizar compra</FinishButton>
      </FinishWrapper>
    </Wrapper>
  );
}

export default Cart;
