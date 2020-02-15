import { ValueObject } from './value-object';

interface TestValueObjectProps {
  unit: string;
  amount: string;
}
class TestValueObject extends ValueObject<TestValueObjectProps> {
  get properties() {
    return this.props;
  }
}

describe('ValueObject', () => {
  describe('constructor', () => {
    it('should set provided properties', () => {
      const props = {
        unit: 'money',
        amount: 'a lot',
      };
      const money = new TestValueObject(props);

      expect(money).toBeInstanceOf(ValueObject);
      expect(money.properties).toEqual(props);
    });
  });

  describe('.equals', () => {
    it('should return true when provided with identical value object', () => {
      const props = {
        unit: 'money',
        amount: 'a lot',
      };
      const money = new TestValueObject(props);
      const alsoMoney = new TestValueObject(props);

      expect(money.equals(money)).toBe(true);
      expect(money.equals(alsoMoney)).toBe(true);
    });

    it('should return false when provided with a different value object', () => {
      const money = new TestValueObject({
        unit: 'money',
        amount: 'a lot',
      });
      const alsoMoney = new TestValueObject({
        unit: 'money',
        amount: 'not so much',
      });

      expect(money.equals(alsoMoney)).toBe(false);
    });
  });
});
