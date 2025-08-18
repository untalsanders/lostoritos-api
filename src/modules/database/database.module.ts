import { Global, Module } from '@nestjs/common'
import { databaseProviders } from './database.providers'

@Global()
@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
