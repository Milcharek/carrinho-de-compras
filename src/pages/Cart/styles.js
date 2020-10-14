import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.36);
  margin-top: 80px;
  border-radius: 15px;
  background-color: #fff;
  padding: 30px;
  width: 90%;
  p {
    margin: 15px 0 15px 0;
  }
  button {
    background: none;
    border: 0;
    padding: 20px;
    font-size: 3em;
    color: #3b74ed;
  }
  h1 {
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 2.4em;
    font-weight: bold;
  }
`;

export const Area = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 30px;
`;

export const ProductInfo = styled.div`
  padding: 20px 0px 0px 30px;
  h2 {
    font-size: 1.7em;
  }
  p {
    font-size: 1.2em;
    color: #beb8b2;
    margin-bottom: -2px;
  }
  span {
    font-size: 1.7em;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: left;
  height: 200px;
  width: 180px;
  border: solid 1px #beb8b2;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 25px 0px 75px;   
  padding: 20px 30px;
  font-size: 1.7em;
  p {
    font-size: 0.3em;
    font-weight: normal;
  }
  span {
    color: #3b74ed;
    font-weight: bold;
  }
`;

export const FreeShipping = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2em;
  background-color: #c8ffac;
  color: #247a19;
  margin: 50px 50px;
  padding: 15px 25px;
  border-radius: 50px;
`;

export const SubmitButton = styled.div`
  button {
    font-size: 2.4em;
    padding: 40px;
    margin: 40px 40px 20px 0px;
    background-color: #3b74ed;
    color: #fff;
    border-radius: 15px;
    width: 100%;
    font-weight: bold;
    outline: none;
  }
`;