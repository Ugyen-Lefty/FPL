import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FPL';

  ngOnInit(): void {
    setTimeout(() => {
      (document.getElementById('abc') as any).play();
    }, 200);
  }

}
