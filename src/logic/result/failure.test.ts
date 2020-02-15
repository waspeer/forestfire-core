import * as DomainError from './domain-error';
import { DomainErrorObject } from './domain-error';
import { Failure } from './failure';

const errorType = 'TEST_ERROR' as const;
type TestError = DomainErrorObject<typeof errorType>;
const testError = DomainError.create(errorType, 'everything is wrong');

describe('Failure', () => {
  let failure: Failure<TestError>;

  beforeAll(() => {
    const error = testError();
    failure = new Failure(error);
  });

  it('should construct', () => {
    expect(failure.constructor).toBe(Failure);
  });

  it('should communicate identity', () => {
    expect(failure.isFailure()).toBe(true);
    expect(failure.isSuccess()).toBe(false);
  });

  it('should throw error when trying to access the value', () => {
    expect(() => failure.value).toThrow();
  });
});
