import React from 'react';
import useCurrency from '../hooks/useCurrency'
import MyForm from '../components/MyForm';

function Display({ currency, updatePrices, setIsLoading }) {
  const usdId = currency[0].id;
  const eurId = currency[1].id;
  const usdtId = currency[2].id;
  return (
    <>
      <div>
        <p>
          {`Moneda: ${currency[0].name} compra: ${currency[0].compra} venta: ${currency[0].venta}`}
        </p>
        <MyForm setIsLoading={setIsLoading} updatePrices={updatePrices} id={usdId}/>
        <p>
          {`Moneda: ${currency[1].name} compra: ${currency[1].compra} venta: ${currency[1].venta}`}
        </p>
        <MyForm setIsLoading={setIsLoading} updatePrices={updatePrices} id={eurId}/>
        <p>
          {`Moneda: ${currency[2].name} compra: ${currency[2].compra} venta: ${currency[2].venta}`}
        </p>
        <MyForm setIsLoading={setIsLoading} updatePrices={updatePrices} id={usdtId}/>
      </div>
    </>
  )
}

function Admin() {
  const { currency, isLoading, updatePrices, setIsLoading } = useCurrency();
  return (
    <div className='home'>
      {isLoading ? <span>Loading...</span> : <Display currency={currency} updatePrices={updatePrices} setIsLoading={setIsLoading}/>}
    </div>
  );
}

export default Admin;