import React from 'react';
import useCurrency from '../hooks/useCurrency';
import PriceBox from '../components/PriceBox';
import { BsWhatsapp } from "react-icons/bs";
import Loader from '../components/Loader';

function Home() {
  const { currency, isLoading} = useCurrency();

  return (
    <>
    <div className='home'>
      {isLoading 
        ? <Loader />
        : <Display currency={currency} />}
    </div>
    </>
  );
}

export default Home;

function Display({ currency }) {
  let whatsappMsg = 'https://wa.me/?text=https://denversanjuan.com/';
  if (window.screen.width >= 767) {
    whatsappMsg = "https://web.whatsapp.com/send?text=https://denversanjuan.com/";
  }
  return (
    <>
      <div className='bodyDisplay'>
        <PriceBox id="usd" name={currency[0].name} compra={currency[0].compra} venta={currency[0].venta} createdAt={currency[0].createdAt}/>
        <PriceBox id="eur" name={currency[1].name} compra={currency[1].compra} venta={currency[1].venta} createdAt={currency[1].createdAt}/>
        <PriceBox id="usdt" name={currency[2].name} compra={currency[2].compra} venta={currency[2].venta} createdAt={currency[2].createdAt}/>
      </div>
      <section className='buttonSection'>
        <div className='buttonWrapper'>
            <a href={whatsappMsg} className='wspText' target="_blank" rel="noreferrer">
              <button className='wspButton'>
                <BsWhatsapp className='wspIcon'/>
                Compartir 
              </button>
          </a>
        </div>
    </section>
    </>
  )
}