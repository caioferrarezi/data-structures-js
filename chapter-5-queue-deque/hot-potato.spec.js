import hotPotato from './hot-potato.js'

describe('hotPotato', () => {
  test('Test the game with 7 rounds', () => {
    const players = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    const result = hotPotato(players, 7);

    expect(result.losers).toEqual(expect.arrayContaining(['Jack', 'Camila', 'Ingrid', 'Carl']));
    expect(result.winner).toBe('John');
  })
})
