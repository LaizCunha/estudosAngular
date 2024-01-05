import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})

export class Button {
    @Input() label: string = '';
    buttonText: string = 'ACESSAR';
    buttonNumber: Number = 1;
    buttonTexts: string[] = ['VENDER', 'COMPRAR'];
    buttonObject = {
        label: 'adicionar ao carrinho',
    };
}