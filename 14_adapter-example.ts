import * as t from 'io-ts'
import { Adapter } from './12_adapter-base'
import { UserFromUser2 } from './10_user-mappers'

export class Users2Adapter extends Adapter {
  readonly namespace = 'Users2'

  getAll() {
    return this.client
      .request(this.method('GetAll'))
      .then(this.decodeResponse(t.array(UserFromUser2)))
  }

  remove(id: number) {
    return this.client.request(
      this.method('Remove'),
      this.decodeRequest({ id }, t.type({ id: t.number })),
    )
  }
}

const client = {
  request() {
    return Promise.resolve()
  },
}

const adapter = new Users2Adapter(client)

;(async () => {
  const users = await adapter.getAll()
  await adapter.remove(1234)
})()
