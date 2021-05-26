import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPX70idwMkYBJfRWmc3ehEZ_TRhivTpfm8Q&usqp=CAU' />
        </Wrap>
        <Wrap>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU-AfEfaoGCzY8K-pxn8HslVuehQNv6zWlw&usqp=CAU' />
        </Wrap>
        <Wrap>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPX70idwMkYBJfRWmc3ehEZ_TRhivTpfm8Q&usqp=CAU' />
        </Wrap>
        <Wrap>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyU-AfEfaoGCzY8K-pxn8HslVuehQNv6zWlw&usqp=CAU' />
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  border img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Movies;
