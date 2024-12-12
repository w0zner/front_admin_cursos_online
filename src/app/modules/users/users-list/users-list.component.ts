import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersAddComponent } from '../users-add/users-add.component';
import { UsersService } from '../services/users.service';

interface Usuario {
  _id: string;
  name: string;
  surname: string;
  email: string;
  rol: string;
  avatar: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})


export class UsersListComponent implements OnInit {

  users: Usuario[] = []

  constructor(public modalService: NgbModal, private userService: UsersService) {

  }

  ngOnInit(): void {
    this.userService.listUsers().subscribe({
      next: (response: any) => {

        this.users = response as Usuario[]
        console.log(this.users)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  registerUser() {
    const modelRef = this.modalService.open(UsersAddComponent, {centered: true, size: 'md'})
  }

}
