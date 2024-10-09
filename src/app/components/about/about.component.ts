import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Curriculum } from '../../interfaces/curriculum';
import { CurriculumService } from '../../services/curriculum.service';
import { EventEmitter } from 'stream';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    providers: [CurriculumService]
})
export class AboutComponent implements OnInit {
    about?: string;
    constructor(private curriculumService: CurriculumService) {
    }

    ngOnInit() {
        let tmpCurriculum: Curriculum = JSON.parse(this.curriculumService.getData("Curriculum") ?? '')?.curriculum;
        this.about = tmpCurriculum.about

    }
}
