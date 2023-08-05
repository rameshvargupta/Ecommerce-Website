import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import SampleImage from './SampleImage';
import Spining from './Spining';

const ProductList = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
      setLoading(false);
    };

    getProduct();
  }, [id]);






  const ProductDetails = () => {

    if (!product) {
      return null; // Return null or a loading indicator if product is null
    }

    return (
      <div className='container my-5'>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <img src={product.image} className='mb-4' alt="" width={300} height={300} />
          </div>
          <div className="col-md-6">
            <h4 className='text-uppercase text-black-50 fs-2 fw-bolder'>{product.category}</h4>
            <h3 className='display-4'>{product.title}</h3>
            {product.rating && (
              <p className='lead fs-4 fw-bolder'>
                Rating {product.rating.rate} <i className="fa fa-star fw-bolder"></i>
              </p>
            )}
            <h2 className='display-5 fw-bolder'>${product.price}</h2>
            <p className='lead'>{product.description}</p>

            <h3 className='lead mb-3 fw-bolder '> Product Available {product.rating.count} Items</h3>

            <button className='btn btn-outline-success center3 mx-4 py-2'
            >Add to Cart</button>

            <Link to="/Product"><button className='btn  center3  btn-outline-primary py-2 my-2 mx-4'>Go to Cart</button></Link>
     
            <button disabled={id === 1} className='btn  center3 btn-outline-info my-2 py-2 mx-4'> 
            <Link style={{textDecoration:"none" }}  to={`/Product/ ${product.id - 1}`}> Previous Item</Link> </button>

            <button disabled={id === 20} className='btn  center3 btn-outline-info my-2 py-2 mx-4'> 
            <Link style={{textDecoration:"none" }}  to={`/Product/ ${product.id + 1}`}> Next Item</Link> </button>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {loading ? (<Spining />) : <ProductDetails />}
      </div>
    </div>
  );
};



export default ProductList
