import * as t from 'io-ts'
import { isLeft } from 'fp-ts/Either'
import { DecodeError } from 'io-ts-promise'

export function decode<I, O>(input: I, codec: t.Decoder<I, O>): O {
  const validation = codec.decode(input)

  if (isLeft(validation)) {
    throw new DecodeError(validation.left)
  }

  return validation.right
}
