import { Entity } from './entity';
import { UUID } from './uuid';

interface TestProps {
  name: string;
  occupation: string;
}

class TestEntity extends Entity<TestProps> {
  get properties() {
    return this.props;
  }
}

describe('Entity', () => {
  describe('constructor', () => {
    it('should construct with props', () => {
      const props = {
        name: 'Henry',
        occupation: 'God',
      };
      const henry = new TestEntity(props);

      expect(henry).toBeInstanceOf(Entity);
      expect(henry.properties).toEqual(props);
    });

    it('should create id on construction without existing id', () => {
      const props = {
        name: 'Henry',
        occupation: 'God',
      };
      const henry = new TestEntity(props);

      expect(henry.id).toBeTruthy();
    });

    it('should construct with existing id', () => {
      const props = {
        name: 'Henry',
        occupation: 'God',
      };
      const id = new UUID();
      const henry = new TestEntity(props, id);

      expect(henry.id).toBe(id);
    });
  });

  describe('.equals', () => {
    const henryProps = {
      name: 'Henry',
      occupation: 'God',
    };
    const henry = new TestEntity(henryProps, new UUID('123123'));

    it('should return true when provided an identical entity', () => {
      const henryTheSecond = new TestEntity(henryProps, new UUID('123123'));
      const sortOfHenry = new TestEntity({ ...henryProps, name: 'Genry' }, new UUID('123123'));

      expect(henry.equals(henry)).toBe(true);
      expect(henry.equals(henryTheSecond)).toBe(true);
      expect(henry.equals(sortOfHenry)).toBe(true);
    });

    it('should return false when provided with a different entity', () => {
      const steveProps = {
        name: 'Steve',
        occupation: 'Banker',
      };
      const steve = new TestEntity(steveProps);

      expect(henry.equals(steve)).toBe(false);
    });
  });
});
