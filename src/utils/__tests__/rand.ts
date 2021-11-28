import { getRandomNumber } from '../rand';

test('test getRandomNumber', () => {
    const rand = getRandomNumber();
    expect(rand).toBeLessThan(1);
})