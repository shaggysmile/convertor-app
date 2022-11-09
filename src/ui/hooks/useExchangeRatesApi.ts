import { useEffect, useState } from 'react';
import { getExchangeRate } from '../../applications';
import { Currency, Rate } from '../../domain';

export const useExchangeRatesApi = ({ from, to }: { from: Currency, to: Currency }) => {
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState<Rate>(0);

  useEffect(() => {
    getExchangeRate({ from, to })
      .then((json) => {
        setLoading(false);
        setRate(json.rate);
        // eslint-disable-next-line no-console
      }).catch((err) => console.log(err));
  }, []);

  return { loading, rate };
};
