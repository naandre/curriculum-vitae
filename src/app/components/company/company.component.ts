import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/experience';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-company',
    standalone: true,
    templateUrl: './company.component.html',
    imports: [NgOptimizedImage]
})
export class CompanyComponent implements OnInit {
    title = 'Curriculum-Vitae';
    @Input() company!: Experience;

    ngOnInit(): void {
        console.log(this.company?.logo);
    }
}
