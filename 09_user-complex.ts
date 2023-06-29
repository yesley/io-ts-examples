import * as t from 'io-ts'
import { NonEmptyString, UUID } from 'io-ts-types'

export const User1 = t.intersection([
  t.type({
    id: t.number,
    name: t.string,
    birthDate: t.number,
    vip: t.boolean,
  }),
  t.partial({ photo: t.string }),
])
export type IUser1 = t.TypeOf<typeof User1>

export const User2 = t.intersection([
  t.type({
    id: t.string,
    name: t.string,
    birthDate: t.string,
    vip: t.union([t.boolean, t.null]),
  }),
  t.partial({ photo: t.string }),
])
export type IUser2 = t.TypeOf<typeof User2>

export const User = t.type({
  id: t.number,
  name: t.string,
  birthDate: t.number,
  vip: t.boolean,
  photo: t.union([t.string, t.null]),
})
export type IUser = t.TypeOf<typeof User>
