import * as tPromise from 'io-ts-promise'
import { decode } from './13_decode-helper'

export interface JsonRpcClient {
  request(method: string, request?: unknown): Promise<unknown>
}

export class Adapter {
  readonly namespace: string = 'Entity'
  readonly client: JsonRpcClient

  constructor(client: JsonRpcClient) {
    this.client = client
  }

  method(name: string): string {
    return `${this.namespace}.${name}`
  }

  decodeRequest = decode
  decodeResponse = tPromise.decode
}
