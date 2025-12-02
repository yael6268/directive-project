import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name = 'דבורי החשובה';

  listTask = [
    { description: 'ללמוד למבחן', status: 'חדש', isUgercy: true },
    { description: 'ש"ב באנגולר', status: 'בביצוע', isUgercy: true },
    { description: 'ש"ב בפרידמן', status: 'הסתיים', isUgercy: true },
    { description: 'להשיג סופגניות', status: 'חדש', isUgercy: false },
    { description: 'לקנות אייס', status: 'בביצוע', isUgercy: true },
    { description: 'NODE', status: 'הסתיים', isUgercy: true },
    { description: 'REACT', status: 'בביצוע', isUgercy: true },
    { description: 'חתונה', status: 'חדש', isUgercy: true },
  ];

  getData(str:string)
  {
    alert(str)
  }

  updateTask(t:any)
  {
    let index = this.listTask.indexOf(t);
    this.listTask[index].status = t.status == "חדש" ? 'בביצוע' : t.status == 'בביצוע'?'הסתיים':'חדש';
  }
}