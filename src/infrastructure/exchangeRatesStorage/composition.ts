import { read, write } from '../../services';

import type { RateItem } from '../../domain';
import type { ReadRateItem, SaveRateItem } from './ports';

export const readRateItem: ReadRateItem = (key: string) => read<RateItem | null>(key) ?? null;
export const saveRateItem: SaveRateItem = (key: string, value: RateItem) => write(key, value);
