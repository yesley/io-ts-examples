import * as t from 'io-ts'
import { isRight } from 'fp-ts/lib/Either'

const string = new t.Type<string, string, unknown>(
  'string',

  (input: unknown): input is string => typeof input === 'string',

  (input, context) => {
    return typeof input === 'string'
      ? t.success(input)
      : t.failure(input, context, 'cannot parse to a string')
  },

  t.identity,
)

string.is('a string') // true
string.decode('a string') // right("a string")
string.decode(null) // left(errors...)
string.encode('a string') // "a string"
