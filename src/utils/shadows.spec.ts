import { cardShadow, subtleShadow } from './shadows';

describe('shadows', () => {
  it('should export cardShadow style object', () => {
    expect(cardShadow).toBeDefined();
    expect(typeof cardShadow).toBe('object');
  });

  it('should export subtleShadow style object', () => {
    expect(subtleShadow).toBeDefined();
    expect(typeof subtleShadow).toBe('object');
  });
});
