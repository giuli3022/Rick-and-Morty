import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError, map } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Character, Info } from './characters.interface'

@Injectable({
    providedIn: 'root',
})

export class CharactersService {
    constructor(private http: HttpClient) {
    }

    getAllCharacters(): Observable<Character[]> {
        return this.http
            .get(`${environment.url}/character`)
            .pipe(
                catchError(() => {
                    const error: string = `something went wrong when trying to get the characters data`
                    return throwError(() => error)
                }),
                map((characters: any) => {
                    console.log('1', characters)
                    let charactersList: Character[] = []
                    let info: Info[] = []
                    charactersList = characters.results
                    info = characters.info
                    console.log('2', charactersList)
                    const responseCharactersList: any = {
                        charactersList,
                        info
                    }
                    return responseCharactersList
                })
            )
    }
    /*
        getCharacter(id: number) {
            return this.http<Character>(`${environment.url}/character/${id}`)
        }
        */

    filterCharacters(query= '', page = 1) {
       // return this.http<Character>(`${environment.url}/character/`)
    }
}

