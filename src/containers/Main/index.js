import React from "react";
import { Wrapper } from "./style";
import { PageValue } from "../../providers/PageValue"

function Main() {
  const { pageValue, setPageValue } = PageValue()
  console.log(pageValue)
  return (
    <Wrapper>
      <button>Abaixo de 10 reais</button>
      <button>Acima de 10 reais</button>
    </Wrapper>
  );
}

export default Main;