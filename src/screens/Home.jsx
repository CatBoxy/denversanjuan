import React from 'react';
import useCurrency from '../hooks/useCurrency'

function Display({ currency }) {
  return (
    <>
      <div>
        <p>
          {`Moneda: ${currency[0].name} compra: ${currency[0].compra} venta: ${currency[0].venta}`}
        </p>
        <p>
          {`Moneda: ${currency[1].name} precio: ${currency[1].compra} venta: ${currency[1].venta}`}
        </p>
        <p>
          {`Moneda: ${currency[2].name} precio: ${currency[2].compra} venta: ${currency[2].venta}`}
        </p>
      </div>
    </>
  )
}

function Home() {
  const { currency, isLoading} = useCurrency();
  return (
    <div className='home'>
      {isLoading ? <span>Loading...</span> : <Display currency={currency} />}
    </div>
  );
}

export default Home;