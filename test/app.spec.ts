import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as request from 'supertest';
import { Logger } from 'winston';
import { AppModule } from './../src/app.module';

describe('AppController', () => {
  let app: INestApplication;
  let logger: Logger;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    logger = app.get(WINSTON_MODULE_PROVIDER);
  });

  describe('GET /', () => {
    it('should be return Hello World!', async () => {
      const response = await request(app.getHttpServer()).get('/');

      logger.info(response);

      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello World!");
    });
  });
});
