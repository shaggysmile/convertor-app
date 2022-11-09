import { RateItem } from '../../domain';

export type ReadRateItem = (key: string) => RateItem | null;
export type SaveRateItem = (key: string, value: RateItem) => void;
