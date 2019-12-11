import formatDate from './formatDate';

describe('formatDate', () => {
  it('formats given timestamp correctly', () => {
    // GMT: 30 May 2019 20:00:00
    const mytimestamp = 1559246400000;
    expect(formatDate(mytimestamp)).toBe('2019-5-30');
  });
  it('formats given STRING timestamp correctly', () => {
    // GMT: 5 Nov 2019 20:00:00
    const mytimestamp = '1572980400000';
    expect(formatDate(mytimestamp)).toBe('2019-11-5');
  });
});
