import { Repository } from 'typeorm'
import { PlayerEntity } from '../entities/player.entity'

export class TypeOrmPlayerRepository extends Repository<PlayerEntity> {}
