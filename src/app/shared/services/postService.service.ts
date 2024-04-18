import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PostService {

    postkey: string = 'https://v6.exchangerate-api.com/v6';
    apikey = 'ae7635ff739126d52e09b37b';

    constructor(
        private http: HttpClient
    ) { }

    getExchangeRates(baseCurrency: string): Observable<any> {
        let postUrl = `${this.postkey}/${this.apikey}/latest/${baseCurrency}`;
        return this.http.get(postUrl)
    }

    getAllCodes() {
        let postUrl = `${this.postkey}/${this.apikey}/latest/AED`;
        return this.http.get(postUrl)
            .pipe(
                map((res: any) => {
                    let currArr: Array<any> = [];
                    for (const key in res.conversion_rates) {
                        currArr.push(key)
                    }
                    return currArr
                })

            )
    }
}
//