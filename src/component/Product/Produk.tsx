import React, { Fragment, useState } from 'react';
import HeaderProduk from './HeaderProduk';
import './Produk.css';

interface cart {
     counter:number
}

const Produk = () => {

    const [order, setOrder] = useState();

    return (
        <div>
            <HeaderProduk/>
            <Fragment>
                <div className="card-main">
                    <div className='card-product'>
                        <div className="img-thumb-product">
                            <img src='https://i.pinimg.com/564x/94/25/ca/9425cacbb42976b7e57c530ffa3b4d36.jpg' alt='product'></img>
                        </div>
                        <p className="product-title"> Daging Ayam</p>
                        <p className="product-price">Rp. 12.000</p>
                        <div className="counter-product">
                            <button className='minus'onClick={()=> setOrder(order - 1)}>-</button>
                            <input type="text" value={order}/>
                            <button className='plus' onClick={()=> setOrder(order + 1)}>+</button>
                        </div>
                    </div>
                </div>
            </Fragment>
            
        </div>
    )
}

export default Produk;