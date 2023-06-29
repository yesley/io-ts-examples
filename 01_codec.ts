import { Context, Errors } from 'io-ts'
import { Either } from 'fp-ts/Either'

class Type<A, O, I> {
  constructor(
    readonly name: string,
    readonly is: (u: unknown) => u is A,
    readonly validate: (input: I, context: Context) => Either<Errors, A>,
    readonly encode: (a: A) => O,
  ) {}

  decode(i: I): Either<Errors, A> {}
}
