import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-user-push-dialog',
  templateUrl: './user-push-dialog.component.html',
  styleUrls: ['./user-push-dialog.component.css']
})
export class UserPushDialogComponent {
  form: FormGroup;
  userId:number;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserPushDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private userService: UsersService) {

    this.userId = data.userId;
    this.form = this.fb.group({
      message: ["", []],
    });
  }

  save() {
    this.userService.sendPushToUserById(this.userId,this.form.value['message'])
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
