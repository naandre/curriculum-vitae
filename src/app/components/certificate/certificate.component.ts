import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';

@Component({
    selector: 'app-certificate',
    standalone: true,
    templateUrl: './certificate.component.html',
    imports: [NgOptimizedImage]
})
export class CertificateComponent implements OnInit {
    title = 'Curriculum-Vitae';
    @Input() certificate!: Certificate;

    ngOnInit(): void {
    }
}
