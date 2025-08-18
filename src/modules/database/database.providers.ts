import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      return {
        type: config.get('database.type'),
        database: config.get('database.name'),
        autoLoadEntities: true,
        syncronize: true,
      } as DataSourceOptions
    },
  }),
]
