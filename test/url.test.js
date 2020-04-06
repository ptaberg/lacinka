const { toURL } = require('../index');

test('Urlify "Витаньне, Сьвет!!!"', () => {
    expect(toURL('Витаньне, Сьвет!!!')).toBe('vitannie_sviet');
})