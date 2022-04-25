import React from 'react';
import useCurrency from '../hooks/useCurrency'
import AdminBox from '../components/AdminBox';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/authProvider';
import Loader from '../components/Loader';

function Admin() {
  const { currency, isLoading, updatePrices, setIsLoading } = useCurrency();
  return (
    <div className='home'>
      {isLoading ? <Loader/> : <Display currency={currency} updatePrices={updatePrices} setIsLoading={setIsLoading}/>}
    </div>
  );
}

export default Admin;

function Display({ currency, updatePrices, setIsLoading }) {
  const { logOut } = useAuthState();
  const usdId = currency[0].id;
  const eurId = currency[1].id;
  const usdtId = currency[2].id;
  return (
    <>
      <div className='bodyDisplay'>
        <AdminBox
          id='usd'
          setIsLoading={setIsLoading}
          updatePrices={updatePrices} 
          currencyId={usdId} 
          name={currency[0].name} 
          compra={currency[0].compra} 
          venta={currency[0].venta} 
          createdAt={currency[0].createdAt}
        />
        <AdminBox 
          id='eur'
          setIsLoading={setIsLoading}
          updatePrices={updatePrices} 
          currencyId={eurId} 
          name={currency[1].name} 
          compra={currency[1].compra} 
          venta={currency[1].venta} 
          createdAt={currency[1].createdAt}
          />
        <AdminBox 
          id='usdt'
          setIsLoading={setIsLoading}
          updatePrices={updatePrices} 
          currencyId={usdtId} 
          name={currency[2].name} 
          compra={currency[2].compra} 
          venta={currency[2].venta} 
          createdAt={currency[2].createdAt}
          />
      </div>
      <section className='buttonSection'>
        <div className='buttonWrapper'>
          <Link to="/" className='wspText'>
            <button className='inicioButton' onClick={logOut}>
              Salir
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}