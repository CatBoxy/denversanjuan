import { useState, useEffect } from 'react';
import { fetchCurrencyCollection, updateCurrencyValues } from '../config/api';

export default function useCurrency(values) {
  const [ currency, setCurrency ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => { // fetch currency whenever Home screen renders
    async function fetchData() {
      const allCurrency = await fetchCurrencyCollection();
      setCurrency(allCurrency);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const updatePrices = async (values) => {
    updateCurrencyValues(values);
    const updatedCurValues = currencyIterator(values);
    setCurrency(updatedCurValues);
    setIsLoading(false);
    return
  };

  function currencyIterator(values) {
    const newArray = currency.map((item) => {
      if (item.id === values.id) {
        item.compra = values.compra
        item.venta = values.venta
      }
      return item;
    })
    return newArray;
  }

  return {
    updatePrices,
    currency,
    isLoading,
    setIsLoading,
  };
}