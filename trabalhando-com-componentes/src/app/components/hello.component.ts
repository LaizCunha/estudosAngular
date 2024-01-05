import { Component, Input } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styles: ['']
})

export class Hellocomponent {
    @Input() name = '';
}