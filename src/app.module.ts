import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import applicationConfig from './config/application.config'
import { PlayerModule } from './modules/player/player.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [applicationConfig],
    }),
    PlayerModule,
  ],
})
export class AppModule {
  static host: string
  static port: number
  static prefix: string
  static apiUrl: string

  constructor(private configService: ConfigService) {
    AppModule.host = this.configService.get('application.host')!
    AppModule.port = this.configService.get('application.port')!
    AppModule.prefix = this.configService.get('application.prefix')!
    AppModule.apiUrl = `http://${AppModule.host}:${AppModule.port}`
  }
}
