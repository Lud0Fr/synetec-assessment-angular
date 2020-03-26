import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    getAllCities(): Observable<ICity[]> {
        return this._httpClient.get<ICity[]>(this.getBaseUrl() + 'api/cities');
    }

    deleteCity(cityId: number): Observable<any> {
        return this._httpClient.delete(this.getBaseUrl() + 'api/cities/delete-city/' + cityId);
    }
}