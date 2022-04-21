import React from 'react';
import useDate from '../hooks/useDate';
import MyForm from '../components/MyForm';

function AdminBox({name, compra, venta, createdAt, setIsLoading, updatePrices, currencyId}) {
  const nameUp = name.toUpperCase();
  return (
    <>
      <div className='priceContainer'>
        <div className='boxHeader'>
          <h2>{nameUp}</h2>
        </div>
        <div className='boxContent'>
          <div className='compra'>
            <h3>Compra</h3>
            <p className='price'>${compra}</p>
          </div>
          <div className='venta'>
            <h3>Venta</h3>
            <p className='price'>${venta}</p>
          </div>
        </div>
        <section className='adminForm'>
          <MyForm setIsLoading={setIsLoading} updatePrices={updatePrices} id={currencyId}/>
        </section>
      </div>
    </>
  );
}

export default AdminBox;