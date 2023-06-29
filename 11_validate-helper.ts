import * as t from 'io-ts'
import { Chain } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'

interface Validator<I, O> {
  validate: t.Validate<I, O>
}

export function validate<O, I, O2, I2>(
  from: Validator<I, O>,
  to: Validator<O | I2, O2>,
  mapper: (entity: O) => O | I2 = t.identity,
) {
  return function (input: I, context: t.Context): t.Validation<O2> {
    return Chain.chain(
      from.validate(input, context),
      flow(mapper, (entity) => to.validate(entity, context)),
    )
  }
}
