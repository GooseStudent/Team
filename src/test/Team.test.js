import { Team, Character } from '../Team.js';

describe('Team (итератор)', () => {
  let team;
  let archer;
  let mage;
  let warrior;

  beforeEach(() => {
    team = new Team();
    archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
    mage = new Character('Маг', 'Magician', 45, 1, 60, 8);
    warrior = new Character('Воин', 'Warrior', 60, 1, 35, 15);
  });

  describe('Краевые случаи', () => {
    test('должен корректно работать с одним персонажем', () => {
      team.add(archer);

      const result = [...team];
      expect(result).toEqual([archer]);
      
      let count = 0;
      for (const char of team) {
        expect(char).toBe(archer);
        count++;
      }
      expect(count).toBe(1);
    });
  });
});