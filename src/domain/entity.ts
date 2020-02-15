import { UUID } from './uuid';

type Props = Record<string, any>;

/**
 * Base Entity class
 */
export abstract class Entity<T extends Props> {
  public readonly id: UUID;

  protected props: T;

  /**
   * Creates an Entity.
   *
   * Props are stored in a protected `props` property. The subclass is expected
   * to decide which getters and setter should be defined.
   *
   * An UniqueEntityID can be passed along when it already exists (i.e. the Entity
   * is retrieved from persistence). Otherwise the Entity will be assigned a new ID.
   *
   * @param {Props} props - The properties of the Entity
   * @param {UUID} [id] - The unique ID of the Entity
   */
  constructor(props: T, id?: UUID) {
    this.id = id || new UUID();
    this.props = props;
  }

  /**
   * Determines if the passed Entity is equal to this Entity
   *
   * @param {Entity} object
   * @returns {boolean}
   */
  public equals(object: Entity<any>): boolean {
    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this.id.equals(object.id);
  }
}
