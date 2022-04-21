import React from 'react';
import useCurrency from '../hooks/useCurrency';
import PriceBox from '../components/PriceBox';


function Home() {
  const { currency, isLoading} = useCurrency();
  return (
    <div className='home'>
      {isLoading ? <span>Loading...</span> : <Display currency={currency} />}
    </div>
  );
}

export default Home;

function Display({ currency }) {
  return (
    <>
      <div>
        <PriceBox name={currency[0].name} compra={currency[0].compra} venta={currency[0].venta} />
        <PriceBox name={currency[1].name} compra={currency[1].compra} venta={currency[1].venta}/>
        <PriceBox name={currency[2].name} compra={currency[2].compra} venta={currency[2].venta}/>
      </div>
    </>
  )
}