import { it } from 'vitest';
import { formatMoney } from './money';

it('should format money correctly', () => {   
  expect(formatMoney(1234.56)).toBe('$1,234.56');
});
