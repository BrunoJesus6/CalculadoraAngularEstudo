import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  display = '';

  apertarTecla(tecla: string) {
    this.display += tecla;
  }

  operacao(op: string) {
    this.display += ` ${op} `;
  }

  apagar() {
    this.display = '';
  }

  calcular() {
    try {
      this.display = evaluate(this.display).toString();
    } catch (e) {
      this.display = 'Erro';
    }
  }
}
