import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('Incoming Request', { timestamp: true })

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`PATH '${req.originalUrl}' - Status: ${res.statusCode}`)
    next()
  }
}
