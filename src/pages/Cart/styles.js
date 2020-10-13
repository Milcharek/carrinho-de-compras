import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.36);
  margin-top: 20px;
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
    font-size: 50px;
    color: #3b74ed;
  }
  h1 {
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 2.8em;
  }
`;

export const Area = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Product = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 30px;
`;

export const ProductInfo = styled.div`
  display: block;
  padding: 20px 30px;
  p {
    font-size: 18px;
    color: #beb8b2;
  }
  span {
      font-size: 24px;
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
    font-size: 1.8em;
`;

export const FreteGratis = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2em;
    background-color: #c8ffac;
    color: #247a19;
    margin: 50px 50px;
    padding: 25px;
    border-radius: 50px;
`;

export const SubmitButton = styled.div`
    button {
        font-size: 2.8em;
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