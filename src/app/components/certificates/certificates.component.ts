import { Component, OnInit } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';
import { CurriculumService } from '../../services/curriculum.service';
import { Curriculum } from '../../interfaces/curriculum';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
    selector: 'app-certificates',
    standalone: true,
    templateUrl: './certificates.component.html',
    imports: [CertificateComponent]
})
export class CertificatesComponent implements OnInit {
    certificates: Certificate[] = [];

    constructor(private curriculumService: CurriculumService) {

    }
    ngOnInit(): void {
        let tmpCurriculum: Curriculum = JSON.parse(this.curriculumService.getData("Curriculum") ?? '')?.curriculum;
        this.certificates = tmpCurriculum?.certificates ?? [];
    }

}
