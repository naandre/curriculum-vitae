import { Component, OnInit } from '@angular/core';
import { StudyComponent } from '../study/study.component';
import { Study } from '../../interfaces/study';
import { CurriculumService } from '../../services/curriculum.service';
import { Curriculum } from '../../interfaces/curriculum';

@Component({
    selector: 'app-studies',
    standalone: true,
    templateUrl: './studies.component.html',
    imports: [StudyComponent]
})
export class StudiesComponent implements OnInit {
    studies: Study[] = [];

    constructor(private curriculumService: CurriculumService) {
    }
    ngOnInit(): void {
        let tmpCurriculum: Curriculum = JSON.parse(this.curriculumService.getData("Curriculum") ?? '')?.curriculum;
        this.studies = tmpCurriculum?.studies ?? [];
    }
}
