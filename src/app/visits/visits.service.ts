import { Visit } from './visit/visit.model';
import { MAPEAMENTO_ESTRATEGICO_API } from '../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class VisitsService {

    constructor(private http: Http) {

    }

    visits(): Observable<Visit[]> {
        return this.http.get(`${MAPEAMENTO_ESTRATEGICO_API}/visita`)
        .pipe(map(res => res.json()));
    }
}