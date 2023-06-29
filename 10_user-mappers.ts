import * as t from 'io-ts'
import { withValidate } from 'io-ts-types'
import { validate } from './11_validate-helper'
import { IUser, User, User1, User2 } from './09_user-complex'

export const UserFromUser1 = withValidate(User, validate(User1, User))
export type IUserFromUser1 = t.TypeOf<typeof UserFromUser1>

export const UserFromUser2 = withValidate(
  User,
  validate(
    User2,
    User,
    (user): IUser => ({
      ...user,
      id: Number(user.id),
      birthDate: Number(user.birthDate),
      vip: Boolean(user.vip),
      photo: user.photo || null,
    }),
  ),
)
export type IUserFromUser2 = t.TypeOf<typeof UserFromUser2>
