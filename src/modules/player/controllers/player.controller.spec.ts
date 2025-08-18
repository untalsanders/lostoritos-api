import { Test } from '@nestjs/testing'
import { Player } from '../models/player'
import { PlayerService } from '../services/player.service'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'
import { PlayerController } from './player.controller'

describe('PlayerController', () => {
  let playerController: PlayerController
  let playerService: PlayerService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService],
    }).compile()

    playerService = moduleRef.get<PlayerService>(PlayerService)
    playerController = moduleRef.get<PlayerController>(PlayerController)

    playerService = {
      getPlayers: jest.fn(),
    } as any
  })

  describe('ping', () => {
    it('should to say pong', () => {
      expect(playerController.ping()).toBe('pong')
    })
  })

  describe('getAllPlayers', () => {
    it('should return an list of players', async () => {
      const mockPlayers: Player[] = [
        {
          id: '1',
          name: new PlayerName('John', 'Doe'),
          phone: new PlayerPhone('+1234567890'),
        },
        {
          id: '2',
          name: new PlayerName('Jane', 'Doe'),
          phone: new PlayerPhone('+0987654321'),
        },
      ]
      ;(playerService.getPlayers as jest.Mock).mockResolvedValue(mockPlayers)
      const result = await playerService.getPlayers()
      expect(result).toEqual(mockPlayers)
    })
  })
})
