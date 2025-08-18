import { registerAs } from '@nestjs/config'

export default registerAs('application', () => ({
  host: process.env.HOST || '127.0.0.1',
  port: parseInt(process.env.PORT || '3000', 10),
  prefix: 'api',
}))
