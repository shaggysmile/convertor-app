import { Currency, RateItem } from '../domain';

import { readRateItem, saveRateItem } from '../infrastructure';
import { fetchRateItem } from '../infrastructure/exchangeRatesApi';

export const getExchangeRate = async ({ from, to }: {
  from: Currency,
  to: Currency
}): Promise<RateItem> => {
  const rateItemStorageKey = `${from}-${to}`;

  let rateItem = readRateItem(rateItemStorageKey);
  const current = Date.now();
  const prev = rateItem?.timestamp || current;
  const next = prev + 86400 * 1000;

  if (rateItem && current <= next) {
    return Promise.resolve(rateItem);
  }

  rateItem = await fetchRateItem(from, to);
  saveRateItem(rateItemStorageKey, rateItem);

  return rateItem;
};
