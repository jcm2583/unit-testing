import fizzBuzz from './fizzbuzz';

test('Number 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
})

test('Number 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
})

test('Number 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})