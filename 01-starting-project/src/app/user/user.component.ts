import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

// type User = { id: string, name: string, avatar: string };

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// Without decorators
// id = input.required<string>();
// name = input.required<string>();
// avatar = input.required<string>();
// select = output<string>();
