import { UUID } from './uuid';

describe('UUID', () => {
  describe('constructor', () => {
    it('should construct without a provided id', () => {
      const uuid = new UUID();

      expect(uuid).toBeInstanceOf(UUID);
      expect(uuid.value).toBeTruthy();
    });

    it('should construct with id provided', () => {
      const id = '123123';
      const uuid = new UUID(id);

      expect(uuid).toBeInstanceOf(UUID);
      expect(uuid.value).toBe(id);
    });
  });

  describe('.equals', () => {
    const id = '123123';
    const uuid = new UUID(id);

    it('should return true when provided with the same uuid', () => {
      const identical = new UUID(id);

      expect(uuid.equals(identical)).toBe(true);
    });

    it('should return false when provided with a different uuid', () => {
      const different = new UUID('234234');

      expect(uuid.equals(different)).toBe(false);
    });
  });
});
