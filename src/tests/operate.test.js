import operate from '../Logic/operate.js';

describe('Check if operate function gives the results', () => {
  test('15 * 8 to get 120', () => {
    expect(operate(15, 8, 'x')).toBe('120');
  });

  test('50 - 30 to get 20', () => {
    expect(operate(50, 30, '-')).toBe('20');
  });

  test('200 + 500 to get 700', () => {
    expect(operate(200, 500, '+')).toBe('700');
  });

  test('10 ÷ 2 to get 5', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });

  test('25 % 2 to get 3', () => {
    expect(operate(25, 2, '%')).toEqual('1');
  });
});
