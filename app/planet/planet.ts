export interface IPlanet {
    PlanetId: string,
    Name: string,
    Distance: number
}
export class Planet implements IPlanet {
    DisplayDistance: boolean
    constructor(myPlanet:IPlanet) {
        this.DisplayDistance = false;
        this.PlanetId=myPlanet.PlanetId;
        this.Name=myPlanet.Name;
        this.Distance=myPlanet.Distance;
    }
    PlanetId: string;
    Name: string;
    Distance: number;
}