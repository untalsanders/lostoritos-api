import { ConsoleLogger, Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const options: any = {
    logger: new ConsoleLogger({
      prefix: 'LOS_TORITOS_APP', // Default is "Nest"
    }),
  }

  const app = await NestFactory.create(AppModule, options)
  const logger = new Logger('Bootstrap')

  const host = AppModule.host
  const port = AppModule.port
  const prefix = AppModule.prefix
  const apiUrl = AppModule.apiUrl

  app.setGlobalPrefix(prefix)
  app.enableCors()

  await app.listen(port, host, () =>
    logger.log(`Server is running on ${apiUrl}`),
  )
}

bootstrap()
