import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular TODO App';
  tasks = [
      {
          task: 'buckshot',
          state: false
      },
      {
          task: '9mm',
          state: true
      },
      {
          task: '.50',
          state: false
      }
      ];

    addTask(task) {
        if (task) {
            this.tasks.push({
            task: task,
            state: false
            });
        }
    };

    toggleSwitch(item) {
        item.state = !item.state;
    };

    remove(index) {
        this.tasks.splice(index, 1);
    };
}
