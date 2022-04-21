import React from 'react';
import useCurrency from '../hooks/useCurrency';
import PriceBox from '../components/PriceBox';
import { BsWhatsapp } from "react-icons/bs";



function Home() {
  const { currency, isLoading} = useCurrency();
  return (
    <>
    <div className='home'>
      {isLoading ? <span>Loading...</span> : <Display currency={currency} />}
    </div>
    <section className='buttonSection'>
      <a className='wspText'>
        <button className='wspButton'>
          <BsWhatsapp className='wspIcon'/>
          Compartir 
        </button>
      </a>
    </section>
    </>
  );
}

export default Home;

function Display({ currency }) {
  return (
    <>
      <div className='bodyDisplay'>
        <PriceBox id="usd" name={currency[0].name} compra={currency[0].compra} venta={currency[0].venta} />
        <PriceBox id="eur" name={currency[1].name} compra={currency[1].compra} venta={currency[1].venta}/>
        <PriceBox id="usdt" name={currency[2].name} compra={currency[2].compra} venta={currency[2].venta}/>
      </div>
    </>
  )
}