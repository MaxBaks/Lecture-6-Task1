import GetSortedProps from '../js/app';
import Character from '../js/domain';

test('props list should be sorted correctly', () => {
  const char = new Character('мечник', 10, 2, 80, 40);
  const propsForSort = ['name', 'level'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const result = GetSortedProps(char, propsForSort);

  expect(result).toEqual(expected);
});
