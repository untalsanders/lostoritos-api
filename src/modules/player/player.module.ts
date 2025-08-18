import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PlayerController } from './controllers/player.controller'
import { PlayerEntity } from './entities/player.entity'
import { PlayerService } from './services/player.service'

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {}
