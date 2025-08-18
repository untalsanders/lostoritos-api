import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

export class Player {
  private id: string
  private name: PlayerName
  private phone: PlayerPhone

  constructor(id: string, name: PlayerName, phone: PlayerPhone) {
    this.id = id
    this.name = name
    this.phone = phone
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getPhone() {
    return this.phone
  }
}
