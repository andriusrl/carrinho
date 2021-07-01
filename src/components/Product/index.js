import React from "react";
import {Image, ImageDiv, Wrapper, Description} from "./style"

function Product(props) {

    return (
      <Wrapper>
          <ImageDiv>
              <Image src={props.image} />
          </ImageDiv>
          <Description>
              <h3>{props.name}</h3>
              <p></p>
              <p></p>
          </Description>
      </Wrapper>
  );
}

export default Product;
