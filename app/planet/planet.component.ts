import { Component, OnInit } from '@angular/core';
import { PlanetService} from './planet.service'
import {IPlanet, Planet} from './planet'
@Component({
    moduleId: module.id,
    selector: 'app-planet',
    templateUrl: 'planet.component.html',
    styleUrls: ["planet.component.css"],
    providers: [PlanetService]
})
export class PlanetComponent implements OnInit {
    constructor(private _planetService: PlanetService) {
        this.Planets = [];
        this._selectedPlanetIndex = -1;
         this.ShowError=false;
    }
    public ShowError:boolean;
    private _selectedPlanetIndex: number;
    public Planets: Planet[];
    ngOnInit() {
        this._planetService.GetPlanets().subscribe((planetsResult: IPlanet[]) => {
            
            for (var item of planetsResult) {
                this.Planets.push(new Planet(item));
            }
        },((error)=>{
            this.ShowError=true;
            console.log(error);
        }));
    }
    ShowPlanetDistance(planetId: string) {
        let found: boolean = false;
        if (this._selectedPlanetIndex >= 0) {
            this.Planets[this._selectedPlanetIndex].DisplayDistance = false;
        }
        for (let i: number = 0; i < this.Planets.length && !found; i++) {
            if (this.Planets[i].PlanetId === planetId) {
                this.Planets[i].DisplayDistance = true;
                found = true;
                this._selectedPlanetIndex=i;
            }
        }

    }

}