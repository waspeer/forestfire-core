import uuidV4 from 'uuid/v4';

export class UUID {
  readonly value: string;

  constructor(id?: string) {
    this.value = id || uuidV4();
  }

  public equals(id: UUID) {
    if (!(id instanceof UUID)) {
      return false;
    }

    return id.value === this.value;
  }
}
