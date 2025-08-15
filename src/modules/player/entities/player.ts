import { v4 as uuidv4 } from 'uuid'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

export class Player {
  public id: string
  public name: PlayerName
  public phone: PlayerPhone

  constructor(name: PlayerName, phone: PlayerPhone, id?: string) {
    this.id = id || uuidv4()
    this.name = name
    this.phone = phone
  }
}
