import { v4 as uuidv4 } from 'uuid'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

export class Player {
  private _id: string
  private _name: PlayerName
  private _phone: PlayerPhone

  constructor(name: PlayerName, phone: PlayerPhone, id?: string) {
    this._id = id || uuidv4()
    this._name = name
    this._phone = phone
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get phone() {
    return this._phone
  }
}
