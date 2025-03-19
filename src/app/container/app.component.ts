import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseFacade } from '../store/base/base.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [BaseFacade],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private baseFacade: BaseFacade) {}

  /* ====
  ngOnInit(): void {

    Example How to call data from facade

    this.baseFacade.setHome();
    this.baseFacade.loadBaseItems();
    this.baseFacade.base$.subscribe((res) => console.log(res, 'Base'));
    this.baseFacade.baseItems$.subscribe((res) =>
      console.log(res, 'Base Items'),
    );
  }
  === */
}
