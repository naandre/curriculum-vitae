import { Component, Input } from '@angular/core';
import { Study } from '../../interfaces/study';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-study',
    standalone: true,
    templateUrl: './study.component.html',
    imports: [NgOptimizedImage]
})
export class StudyComponent {
    title = 'Curriculum-Vitae';
    @Input() study!: Study;
}
