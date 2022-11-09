export type Rate = number;
export type Amount = number;
export type Currency = 'RUB' | 'USD' | 'UZS';

export type RateItem = {
  readonly from: Currency;
  readonly to: Currency;
  readonly rate: Rate;
  readonly timestamp: Timestamp;
};
