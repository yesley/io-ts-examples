import * as t from 'io-ts'

interface PositiveBrand {
  readonly Positive: unique symbol
}

const Positive = t.brand(
  t.number,
  (n): n is t.Branded<number, PositiveBrand> => n > 0,
  'Positive',
)
type IPositive = t.TypeOf<typeof Positive>

const PositiveInt = t.intersection([t.Int, Positive])
type PositiveInt = t.TypeOf<typeof PositiveInt>
