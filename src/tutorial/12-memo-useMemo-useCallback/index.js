import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const calculateMostExpensive = (data) => {
    return (
      data.reduce((total, item) => {
        const price = item.fields.price;
        if (price > total) {
          total = price;
        }
        return total;
      }, 0) / 100
    );
  };

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  // eslint-disable-next-line
  const mostExpensive = useMemo(() => calculateMostExpensive(products));

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h3 style={{ marginTop: '3rem' }}>Cart: {cart}</h3>
      <h3>Most expensive: ${mostExpensive}</h3>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('Big list called');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('Single item called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </article>
  );
};
export default Index;
