import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConsoleLogger } from '@nestjs/common'

const configService = new ConfigService()

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'LOS_TORITOS_APP', // Default is "Nest"
    }),
  })
  app.enableCors()
  await app.listen(configService.get('PORT') ?? 3000)
}

bootstrap()
