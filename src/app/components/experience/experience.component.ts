import { Component, OnInit } from '@angular/core';
import { CompanyComponent } from '../company/company.component';
import { Experience } from '../../interfaces/experience';
import { CurriculumService } from '../../services/curriculum.service';
import { Curriculum } from '../../interfaces/curriculum';

@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './experience.component.html',
    imports: [CompanyComponent]
})
export class ExperienceComponent implements OnInit {
    experiences: Experience[] = [];

    constructor(private curriculumService: CurriculumService) {

    }

    ngOnInit(): void {
        let tmpCurriculum: Curriculum = JSON.parse(this.curriculumService.getData("Curriculum") ?? '')?.curriculum;
        this.experiences = tmpCurriculum?.experience ?? [];
    }
}
