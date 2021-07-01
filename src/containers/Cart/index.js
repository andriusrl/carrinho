import React from "react";
import { PageValue } from "../../providers/PageValue"
import { Division, Wrapper } from "./style";

import up from "../../mocks/up.json"
import Product from "../../components/Product";


function Cart() {
  const { pageValue, setPageValue } = PageValue()
  console.log(pageValue)

  console.log(up.items)
  return (
    <Wrapper>
      <h2>
        Meu carrinho
      </h2>
      <Division />
      <div>
        {
          up.items.map((product) => { //TROCAR DEPOIS PELA VARIAVEL "up" QUE VEM DO PROVIDER
            return (
              <Product
                key={product.productId}
                image={product.imageUrl}
                name={product.name}
              />
            )
          })
        }
      </div>
    </Wrapper>
  );
}

export default Cart;
