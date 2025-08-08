import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

const configService = new ConfigService()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const logger = new Logger('Bootstrap')
  const host = configService.get('HOST')
  const port = configService.get('PORT')
  const prefix = configService.get('CONTEXT_API')

  app.setGlobalPrefix(prefix)
  await app.listen(port, host)
  logger.log(`Server is running in ${await app.getUrl()}`)
}
bootstrap()
