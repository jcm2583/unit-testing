import leapYear from './leapyear'

test('Number 8', () => {
    expect(leapYear(8)).toBe(true);
})

test('Number 100', () => {
    expect(leapYear(100)).toBe(false);
})

test('Number 300', () => {
    expect(leapYear(300)).toBe(false);
})

test('Number 1700', () => {
    expect(leapYear(1700)).toBe(false);
})

test('Number 1900', () => {
    expect(leapYear(1900)).toBe(false);
})

test('Number 2000', () => {
    expect(leapYear(2000)).toBe(true);
})