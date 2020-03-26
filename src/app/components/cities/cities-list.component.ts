import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[] = [];
    constructor(private _cityService: CitiesService) {}

    ngOnInit(): void {
        this.getAllCities();
    }

    getAllCities() {
        this._cityService.getAllCities().subscribe((response) => {
            this.cities = response;
        });
    }

    onDeleteClicked(city: ICity) {
        this._cityService.deleteCity(city.id).subscribe();
    }
}