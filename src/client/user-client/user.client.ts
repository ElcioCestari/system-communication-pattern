import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { BaseUser } from '../../base/entity/base-user';

@Injectable()
export class UserClient {
  private readonly path: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly logger: Logger,
  ) {
    this.path = this.configService.get<string>('USER_PATH');
    if (!this.path) {
      throw new InternalServerErrorException('Error to load environment');
    }
  }

  public async get(): Promise<BaseUser[]> {
    const observable = this.httpService.get<BaseUser[]>(this.path).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }

  public async post(user: BaseUser): Promise<BaseUser> {
    const observable = this.httpService.post<BaseUser>(this.path, user).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }

  async getById(id: string): Promise<BaseUser> {
    const observable = this.httpService
      .get<BaseUser>(`${this.path}/${id}`)
      .pipe(
        map((value) => value.data),
        catchError(async (err) => {
          this.logger.error(`error to make a GET ${err}`);
          if (err.response.status === 404) {
            return null;
          }
          throw err;
        }),
      );
    return lastValueFrom(observable);
  }

  async put(id: string, user: BaseUser): Promise<BaseUser> {
    const observable = this.httpService
      .put<BaseUser>(`${this.path}/${id}`, user)
      .pipe(
        map((value) => value.data),
        catchError(async (err) => {
          this.logger.error(`error to make a PUT ${err}`);
          throw err;
        }),
      );
    return lastValueFrom(observable);
  }

  delete(id: string): Promise<any> {
    const observable = this.httpService
      .delete<BaseUser>(`${this.path}/${id}`)
      .pipe(
        map((value) => value.data),
        catchError(async (err) => {
          this.logger.error(`error to make a DELETE ${err}`);
          throw err;
        }),
      );
    return lastValueFrom(observable);
  }
}
