import React from "react";
import { Image, ImageDiv, Wrapper, Description } from "./style"

function Product(props) {

    return (
        <Wrapper>
            <Image src={props.image} />
            <Description>
                <h3>{props.name[0].toUpperCase()}{props.name.slice(1).toLowerCase()}</h3>
                <p>R$ {(props.price / 100).toFixed(2)}</p>
                <p>R$ {(props.sellingPrice / 100).toFixed(2)}</p>
            </Description>
        </Wrapper>
    );
}

export default Product;
