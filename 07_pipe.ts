import * as t from 'io-ts'

const NumberCodec = new t.Type<number, string, string>(
  'NumberCodec',
  t.number.is,
  (s, c) => {
    const n = parseFloat(s)
    return isNaN(n) ? t.failure(s, c) : t.success(n)
  },
  String,
)

const NumberFromString = t.string.pipe(NumberCodec, 'NumberFromString')
