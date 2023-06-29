import * as t from 'io-ts'

const User = t.type({
  id: t.string,
  name: t.string,
  vip: t.boolean,
  birthDate: t.number,
  company: t.union([t.string, t.null]),
})
type IUser = t.TypeOf<typeof User>
