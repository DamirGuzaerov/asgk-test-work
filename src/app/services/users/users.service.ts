import {Injectable} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";

export interface IUserPasses {
  "user_id": number,
  "template": string,
  "first_name": string,
  "last_name": string,
  "pat_name": string,
  "phone": string,
  "sms_verify": boolean,
  "email": string,
  "birthday": string,
  "gender": string,
  "car_number": string,

  [x: string | number | symbol]: unknown;
}

interface IPassesResponse {
  meta: Object,
  passes: IUserPasses[]
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userPasses: IUserPasses[] = []

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  getUserPasses(limit: number = 10, offset: number = 0) {
    const token = this.authService.token;
    return this.httpClient.get<IPassesResponse>(`v1/${token}/passes?limit=${limit}&offset=${offset}`)
  }
}
