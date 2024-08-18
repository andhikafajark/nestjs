import { Controller, Get, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.debug(`AppController.getHello() has been called`);

    return this.appService.getHello();
  }
}
