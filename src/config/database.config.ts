import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT!, 10) || 5432,
  type: process.env.DATABASE_TYPE,
  name: process.env.DATABASE_NAME,
}))
