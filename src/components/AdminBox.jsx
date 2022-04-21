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
            <div className='h3Container'>
              <h3>COMPRA</h3>
            </div>
            <p className='price'>${compra}</p>
          </div>
          <div className='venta'>
            <div className='h3Container'>
              <h3>VENTA</h3>
            </div>
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