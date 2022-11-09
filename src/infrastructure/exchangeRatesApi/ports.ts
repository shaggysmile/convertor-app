import { Currency, RateItem } from '../../domain';

export type FetchRateItem = (from: Currency, to: Currency) => Promise<RateItem>;
