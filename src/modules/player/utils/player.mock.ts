import { faker } from '@faker-js/faker/locale/es_MX'
import * as fs from 'fs'
import * as path from 'path'
import { Player } from '../models/player'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'

const fileHasRecords = (file: string): boolean => {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
    console.log('db.json is empty or does not exist. Writing mock data...')
    return true
  }
  return false
}

export const writeMockPlayerList = async (): Promise<void> => {
  const dbPath = path.resolve(process.cwd(), './.tmp/db.json')

  if (!fileHasRecords(dbPath)) return

  const players: Player[] = []
  for (let i = 1; i <= 20; i++) {
    const player = new Player(
      faker.string.uuid(),
      new PlayerName(faker.person.firstName(), faker.person.lastName()),
      new PlayerPhone(faker.phone.number({ style: 'international' })),
    )
    players.push(player)
  }

  const playersPlain = players.map(player => ({
    id: player.getId(),
    name: {
      first: player.getName().getFirst(),
      last: player.getName().getLast(),
    },
    phone: player.getPhone(),
  }))

  if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true })
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(playersPlain, null, 2), err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}

export const readMockPlayerList = (): Promise<Player[]> => {
  const dbPath = path.resolve(process.cwd(), './.tmp/db.json')

  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      const playersData = JSON.parse(data)
      const players: Player[] = playersData.map((p: any) => ({
        id: p.id,
        name: new PlayerName(p.name.first, p.name.last),
        phone: new PlayerPhone(p.phone.value),
      }))
      resolve(players)
    })
  })
}
