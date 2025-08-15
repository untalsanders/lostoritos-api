import { faker } from '@faker-js/faker'
import { Player } from '../entities/player'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

export const playerList = (): Promise<Player[]> => {
  const players: Player[] = []
  for (let i = 1; i <= 20; i++) {
    const player = {
      id: faker.string.uuid(),
      name: new PlayerName(faker.person.firstName(), faker.person.lastName()),
      phone: new PlayerPhone(faker.phone.number({ style: 'international' })),
    }
    players.push(player)
  }
  return new Promise(resolve => {
    resolve(players)
  })
}
