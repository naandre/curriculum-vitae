import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Curriculum } from '../interfaces/curriculum';

@Injectable({
    providedIn: 'root',
})
export class CurriculumService {
    private url = '../../assets/data.json';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(
        private http: HttpClient
    ) { }

    getCurriculum(): Observable<Curriculum> {
        return this.http.get<Curriculum>(this.url);
    }

    public saveData(key: string, value: string) {
        localStorage.setItem(key, value);
    }
    public getData(key: string) {
        return localStorage.getItem(key)
    }
    public removeData(key: string) {
        localStorage.removeItem(key);
    }
    public clearData() {
        localStorage.clear();
    }

}