import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  rol: string= ''
  name: string= ''
  surname: string= ''
  email: string= ''
  password: string= ''
  profesion: string= ''
  description: string= ''

  FILE_AVATAR: any
  IMAGEN_PREVISUALIZAR: any= 'assets/media/avatars/300-6.jpg'

  constructor(public toaster: ToastrService){ }

  ngOnInit(): void {
  }

  procesarAvatar($event: any) {
    if($event.target.files[0].type.indexOf("image") < 0){
      this.toaster.error('Solamente se aceptan imagenes', 'Validaciones')
      return
    }
    this.FILE_AVATAR = $event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(this.FILE_AVATAR)
    reader.onloadend = () => this.IMAGEN_PREVISUALIZAR = reader.result;
  }

  removeImage() {
    this.IMAGEN_PREVISUALIZAR = 'assets/media/avatars/300-6.jpg'
  }

}
