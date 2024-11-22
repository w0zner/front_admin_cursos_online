import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersAddComponent } from '../users-add/users-add.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(public modalService: NgbModal) {

  }

  ngOnInit(): void {

  }

  registerUser() {
    const modelRef = this.modalService.open(UsersAddComponent, {centered: true, size: 'md'})
  }

}
