import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { logger } from './shared/middlewares/logger.middleware'

const configService = new ConfigService()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(logger)
  app.enableCors()
  await app.listen(configService.get('PORT') ?? 3000)
}

bootstrap()
