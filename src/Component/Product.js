import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Spining from './Spining'


const Product = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loding, setLoding] = useState(false)
    const [componentMounted, setComponentMounted] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            setLoding(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoding(false);
            }

            return () => {
                setComponentMounted(false);
            }
        }
        getProduct();

    }, [componentMounted])

    const filterProduct = (cat) => {
        const updatelist = data.filter((x) => x.category === cat);
        setFilter(updatelist)
    }




    const ShowProduct = () => {
        return (

            <>
                <div className="row center2">
                    <div className="col-12">
                        <button className='btn btn-outline-dark my-2 mx-2' onClick={() => setFilter(data)}>All</button>
                        <button className='btn btn-outline-dark my-2 mx-2' onClick={() => filterProduct("men's clothing")}>Men's Clothes</button>
                        <button className='btn btn-outline-dark my-2 mx-2' onClick={() => filterProduct("women's clothing")}>Women's Clothes</button>
                        <button className='btn btn-outline-dark my-2 me-2 mx-2 ' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className='btn btn-outline-dark my-2 me-2 mx-2 ' onClick={() => filterProduct("electronics")}>Electronic</button>
                    </div>
                </div>

                {filter.map((product) => {
                    return (
                        <>

                            <div className="col-sm-6 col-lg-4" id='center3' >
                                <Link  style={{ textDecoration: "none" }} to={`/Product/ ${product.id}`}>
                                    <div className="card mt-2 text-center settle" >

                                        <img src={product.image} className="card-img-top " alt="" height={"220px"} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.slice(0, 20)}...</h5>
                                            <p className="card-text fw-bold">${product.price}</p>
                                            <Link to={`/Product/ ${product.id}`} className="btn btn-outline-success ">By Now</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </>
                    )
                })
                }
            </>
        )
    }
    return (
        <div className='container'>

            <div className="row">
                <div className="col-12">
                    <h1 className='fw-bold' style={{ textAlign: "center", margin: "10px" }}>Latest Product For you </h1>

                </div>
            </div>
            <div className="row my-3">

                {loding ? <Spining /> :

                    <ShowProduct />}
            </div>
        </div>
    )
}

export default Product
