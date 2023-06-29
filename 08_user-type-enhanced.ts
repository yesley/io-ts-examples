import * as t from 'io-ts'
import { DateFromNumber, NonEmptyString, UUID } from 'io-ts-types'

const User = t.type({
  id: UUID,
  name: NonEmptyString,
  vip: t.boolean,
  birthDate: DateFromNumber,
  company: t.union([UUID, t.null]),
})
type IUser = t.TypeOf<typeof User>
