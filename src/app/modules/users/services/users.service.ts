import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { AuthService } from '../../auth';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  listUsers(search: any = null) {
    this.isLoadingSubject.next(true)
    const headers = new HttpHeaders({'token': this.authservice.token})

    let link = '?T='
    if(search) {
      link = '&search=' + search
    }

    const url = URL_SERVICIOS + '/users/list' + link

    return this.http.get(url, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  register(data: any){
    this.isLoadingSubject.next(true)
    const headers = new HttpHeaders({'token': this.authservice.token})

    const url = URL_SERVICIOS + '/users/register-admin'

    return this.http.post(url, data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  update(data: any){
    this.isLoadingSubject.next(true)
    const headers = new HttpHeaders({'token': this.authservice.token})

    const url = URL_SERVICIOS + '/users/update'

    return this.http.post(url, data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }


  delete(id: any){
    this.isLoadingSubject.next(true)
    const headers = new HttpHeaders({'token': this.authservice.token})

    const url = URL_SERVICIOS + '/users/delete/' + id

    return this.http.delete(url, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }



}
