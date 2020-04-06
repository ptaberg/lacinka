const { toLacinka } = require('../index');

test('Covert "Жыве Беларусь"', () => {
    expect(toLacinka('Жыве Беларусь')).toBe('Žyvie Biełaruś');
})

test('Checking Ł', () => {
    expect(toLacinka('Ла Ло Лу Лэ Лы')).toBe('Ła Ło Łu Łe Ły');
})

test('Checking ł', () => {
    expect(toLacinka('ла ло лу лэ лы')).toBe('ła ło łu łe ły');
})

test('Checking L', () => {
    expect(toLacinka('Ля Лё Лю Ле Лi')).toBe('La Lo Lu Le Li');
})

test('Checking l', () => {
    expect(toLacinka('ля лё лю ле лi')).toBe('la lo lu le li');
});

test('Simple string', () => {
    expect(toLacinka('ля лё лю ле лi')).toBe('la lo lu le li');
});