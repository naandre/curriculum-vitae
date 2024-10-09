import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { Curriculum } from './interfaces/curriculum';
import { CurriculumService } from './services/curriculum.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private curriculumService: CurriculumService) { }
  ngOnInit(): void {
    this.getCurriculum();
  }

  getCurriculum(): void {
    this.curriculumService.getCurriculum().subscribe(curriculumResponse => this.curriculumService.saveData("Curriculum", JSON.stringify(curriculumResponse)));
  }
  title = 'Curriculum-Vitae';
}
