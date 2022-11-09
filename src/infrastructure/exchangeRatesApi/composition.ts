import { transport } from '../../services';

import type { Currency, Rate } from '../../domain';
import type { FetchRateItem } from './ports';
import { RateItem } from '../../domain';
import { EXCHANGE_RATES_API_KEY, EXCHANGE_RATES_API_URL } from './config';

type RateItemOutput = {
  timestamp: Timestamp,
  rates: {
    [key in Currency]: Rate
  }
};

export const fetchRateItem: FetchRateItem = (from: Currency, to: Currency): Promise<RateItem> => {
  const url = `${EXCHANGE_RATES_API_URL}${EXCHANGE_RATES_API_KEY}`;
  return transport<RateItemOutput>(
    url,
  ).then((output) => {
    const rate = output.rates[to] / output.rates[from];
    const timestamp = Date.now();
    return {
      rate,
      from,
      to,
      timestamp,
    };
  });
};
