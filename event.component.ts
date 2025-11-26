import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-event',
    standalone: true,
    imports: [FormsModule, NgIf, NgFor, NgStyle, NgClass],
    templateUrl: './event.component.html',
    // styleUrl: ''
})
export class EventComponent {
    name: string = '';
    clickButton() {
        alert('hello world')
    }

    keyName(e: any) {
       
        this.name += e.key;

    }

    send()
    {
        alert("לחצו על אנטר")
    }


}