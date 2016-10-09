import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { IPlanet} from './planet'

@Injectable()
export class PlanetService {
    private _url: string = 'http://localhost:16688/api/Planets';
    constructor(private _http: Http) { }
    GetPlanets(): Observable<IPlanet[]> {
        return this._http.get(this._url)
            .map((response: Response) => <IPlanet[]>response.json());
    }
}