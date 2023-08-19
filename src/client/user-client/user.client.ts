import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class UserClient {
  private readonly path: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly logger: Logger,
  ) {
    this.path = this.configService.get<string>('BASE_PATH');
    if (!this.path) {
      throw new InternalServerErrorException('Error to load environment');
    }
  }

  public async get() {
    this.httpService.get(this.path).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
  }
}
