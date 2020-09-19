import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = this.todoForm.value;
    this.todoService.addTodo(todo).subscribe( () => {
      this.router.navigate(['/', 'todos']);
    });
  }

}
