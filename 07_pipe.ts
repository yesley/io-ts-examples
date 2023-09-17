import * as t from 'io-ts'
import { withValidate } from 'io-ts-types'

const UppercaseString = withValidate(
  t.string,
  (u, c) => {
    return t.string.is(u) ? t.success(u.toUpperCase()) : t.failure(u, c)
  },
  'UppercaseString',
)
type IUppercaseString = t.TypeOf<typeof UppercaseString>

const CountryCode = UppercaseString.pipe(
  t.keyof({
    RU: null,
    GB: null,
    US: null,
    JP: null,
  }),
  'CountryCode',
)
type ICountryCode = t.TypeOf<typeof CountryCode>
