import React from "react";
import styled from "styled-components";
import PriceFormatter from "./components/PriceFormatter";

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductTitle = styled.h2`
  font-size: xx-large;
  font-weight: 500;
`;

const ProductSubTitle = styled.h3`
  font-size: x-large;
  font-weight: 500;
`;

const ProductDescription = styled.p``;

const CardWrapper = styled.div`
  display: inline-block;
  width: 400px;
  padding: 1em;
  border: 1px solid green;
  border-radius: 20px;
`;

function ProductPrice({ price, currencyCode }) {
  return (
    <p>
      <PriceFormatter price={price} currencyCode={currencyCode} />
    </p>
  );
}

function ContCard(props) {
  return <CardWrapper>{props.children}</CardWrapper>;
}

export default function AppEx7() {
  return (
    <ContCard>
      <ProductImage
        src={"https://picsum.photos/id/237/200/300"}
        alt={"검은강아지"}
      />
      <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
      <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        distinctio sed molestias saepe reiciendis fugit illum enim et inventore,
        aliquam esse non nam consectetur minima atque consequuntur voluptates,
        eum quia.
      </ProductDescription>
      <ProductPrice price={1000} currencyCode="USD" />
    </ContCard>
  );
}
