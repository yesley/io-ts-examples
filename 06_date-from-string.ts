import * as t from 'io-ts'
import { either } from 'fp-ts/Either'

const DateFromString = new t.Type<Date, string, unknown>(
  'DateFromString',

  (u): u is Date => u instanceof Date,

  (u, c) => {
    return either.chain(t.string.validate(u, c), (s) => {
      const d = new Date(s)
      return isNaN(d.getTime()) ? t.failure(u, c) : t.success(d)
    })
  },

  (a) => a.toISOString(),
)

const s = new Date(1973, 10, 30).toISOString()

DateFromString.decode(s) // right(new Date('1973-11-29T23:00:00.000Z'))
DateFromString.decode('foo') // left(errors...)
