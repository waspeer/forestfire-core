import { DomainErrorObject } from './domain-error';
import { Failure } from './failure';
import { Success } from './success';

export type Either<T extends DomainErrorObject<any>, S> = Failure<T, S> | Success<T, S>;

export function fail<T extends DomainErrorObject<any>, S = any>(error: T): Either<T, S> {
  return new Failure<T, S>(error);
}

export function ok<T, S extends DomainErrorObject<any> = DomainErrorObject<any>>(
  value?: T,
): Either<S, T> {
  return new Success<S, T>(value);
}

export function combine<T extends DomainErrorObject<any>>(
  results: Either<T, any>[],
): Either<T, any> {
  return results.reduce((combinedResult, result) => {
    if (combinedResult.isFailure()) {
      return combinedResult;
    }
    return result;
  }, ok());
}
