import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { User } from '../entity/user';

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

  public async get(): Promise<User[]> {
    const observable = this.httpService.get<User[]>(this.path).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }

  public async post(user: User): Promise<User> {
    const observable = this.httpService.post<User>(this.path, user).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }

  async getById(id: string): Promise<User> {
    const observable = this.httpService.get<User>(`${this.path}/${id}`).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a GET ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }

  async put(id: string, user: User): Promise<User> {
    const observable = this.httpService
      .put<User>(`${this.path}/${id}`, user)
      .pipe(
        map((value) => value.data),
        catchError(async (err) => {
          this.logger.error(`error to make a PUT ${err}`);
          throw err;
        }),
      );
    return lastValueFrom(observable);
  }

  delete(id: number): Promise<any> {
    const observable = this.httpService.delete<User>(`${this.path}/${id}`).pipe(
      map((value) => value.data),
      catchError(async (err) => {
        this.logger.error(`error to make a DELETE ${err}`);
        throw err;
      }),
    );
    return lastValueFrom(observable);
  }
}