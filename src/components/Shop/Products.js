import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1',
    price: 6,
    title: 'My First Product',
    description: 'The first Product'
  },
  { id: 'p2',
    price: 5,
    title: 'My Second Product',
    description: 'The second Product'
  },
  { id: 'p3',
    price: 7,
    title: 'My Third Product',
    description: 'The third Product'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
