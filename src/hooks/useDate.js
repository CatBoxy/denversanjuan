import { useState, useEffect } from 'react';

export default function useDate({ createdAt }) {
  const [ formattedDate, setFormattedDate ] = useState();

  useEffect(() => { // formats firebase date to js date format
    const formatDate = () => {
      const date = createdAt.toDate();
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth()
      const day = new Date(date).getDay()
      const hours = new Date(date).getHours()
      const minutes = new Date(date).getMinutes()

      const newDate = day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ' hs';
      setFormattedDate(newDate)

    };
    formatDate();
  }, [ createdAt ]);

  return [ formattedDate ];
}
