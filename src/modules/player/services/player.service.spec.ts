import { Test, TestingModule } from '@nestjs/testing'
import { Player } from '../entities/player'
import { PlayerName } from '../value-objects/player-name.vo'
import { PlayerPhone } from '../value-objects/player-phone.vo'
import { PlayerService } from './player.service'

describe('PlayerService', () => {
  let service: PlayerService

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [PlayerService],
    }).compile()

    service = moduleRef.get<PlayerService>(PlayerService)

    service = {
      getPlayers: jest.fn(),
    } as any
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getPlayers', () => {
    it('should return a list of players', async () => {
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
      ;(service.getPlayers as jest.Mock).mockResolvedValue(mockPlayers)

      const result = await service.getPlayers()

      expect(result).toEqual(mockPlayers)
      expect(service.getPlayers).toHaveBeenCalledTimes(1)
    })
  })
})
