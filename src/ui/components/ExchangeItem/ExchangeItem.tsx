import { FC } from 'react';

import { Amount, Currency } from '../../../domain';
import { useExchangeRatesApi } from '../../hooks/useExchangeRatesApi';

import styles from './ExchangeItem.module.css';

export const ExchangeItem: FC<{
  amount: Amount,
  to: Currency,
  from: Currency
}> = (
  {
    amount,
    to,
    from,
  },
) => {
  const { loading, rate } = useExchangeRatesApi({ from, to });

  const fromCurrency = new Intl.NumberFormat('ru-RU', {
    style: 'currency', currency: from,
  }).format(amount);

  const toCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: to,
  }).format(rate * amount);

  return (
    <div className={styles.item}>
      <div className={styles.from}>{fromCurrency}</div>
      <div className={styles.to}>
        {loading
          ? (<span className={styles.loader}>Loading</span>)
          : (<span>{ toCurrency}</span>)}
      </div>
    </div>
  );
};
