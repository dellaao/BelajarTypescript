import React , {useCallback, useState} from 'react';
import './HeaderProduk.css';
import Produk from './Produk';

const HeaderProduk = () => {
  
  return (
    <div>
        <div className="header">
            <div className="logo">
                <img src="https://www.freepnglogos.com/uploads/shopee-logo/shopee-circle-logo-design-shopping-bag-13.png" alt="" />
            </div>
            <div className="troley">
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" />
                <div className="count">{}</div>
            </div>
        </div>
    </div>
  )
}

export default HeaderProduk;