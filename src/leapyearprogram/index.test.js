import leapYear from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput)
});