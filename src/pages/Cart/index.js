import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { 
  Container, 
  Area, 
  Product, 
  ProductInfo, 
  Image, 
  Total, 
  FreeShipping, 
  SubmitButton 
} from './styles';

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [freeShipping, setFreeShipping] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      async function loadProducts() {
        const response = await api.get('items');

        const data = response.data.map(item => ({
          ...item,
          name: item.name.toLowerCase().replace(/(?:^|\s)(?!da|de|do|e)\S/g, l => l.toUpperCase()),
          sellingPrice: item.sellingPrice / 100,
          listPrice: item.listPrice / 100,
        }));

        setProducts(data);
      }
      loadProducts();
    }, []);

    useEffect(() => {
      if (total >= 10) {
        setFreeShipping(true)
      } else (setFreeShipping(false));
      if (items.length === 0) {
        setTotal(0);
      }
    }, [items.length, total]);

    const handleAddItem = (item) => {
      setItems([...items, item]);
      setTotal(total + item.sellingPrice);
    }
  
    const handleRemoveItem = (item) => {
      var array = [...items];
      var index = array.indexOf(item)
      if (index !== -1) {
        array.splice(index, 1);
        setItems(array);
        setTotal(total - item.sellingPrice)
      } else return;
    }

    const handleSubmit = () => {
      toast.success('Compra efetuada com sucesso!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setItems([])
    }
  
    return (
      <Container>
      <h1>Meu carrinho</h1>
      <hr />
      <div>
        {products.map(item => (
          <Area key={item.id}>
            <Product>
            <Image src={item.imageUrl} />
              <ProductInfo>
                <h2>{item.name}</h2>
                <p>{formatPrice(item.listPrice)}</p>
                <span>{formatPrice(item.sellingPrice)}</span>
              </ProductInfo>
            </Product>

              <button type="button" onClick={() => handleRemoveItem(item)}>
                <MdRemoveCircleOutline />
              </button>
              <button type="button" onClick={() => handleAddItem(item)}>
                <MdAddCircleOutline />
              </button>
          </Area>
        ))}
      </div>
      <hr />
      <Total> 
        <h2>Total:</h2>
        <h2>
          {formatPrice(total)} 
          {!freeShipping && 
            <p>Faltam <span>{formatPrice(10 - total)}</span> para Frete Grátis!</p>
          }
        </h2>
      </Total>
        {freeShipping && 
          <FreeShipping>Parabéns, sua compra tem frete grátis !</FreeShipping>
        }
      <hr />
      <SubmitButton>
        <button type="button" onClick={handleSubmit}>
          Finalizar compra
        </button>
      </SubmitButton>
    </Container>
    );
}