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
                    let charactersList: Character[] = []
                    let info: Info[] = []
                    charactersList = characters.results
                    info = characters.info
                    const responseCharactersList: any = {
                        charactersList,
                        info
                    }
                    return responseCharactersList
                })
            )
    }

    getCharacter(id: number): Observable<Character[]> {
        return this.http
        .get(`${environment.url}/character/${id}`)
        .pipe(
            catchError(() => {
                const error: string = `something went wrong when trying to get the characters data`
                return throwError(() => error)
            }),
            map((character: any) => {
                console.log('1', character)
                let characterDetails: Character[] = []
                characterDetails = character                
                console.log('2', characterDetails)
                return characterDetails
            })
        )
    }


    filterCharacters(query = '', page = 1) {
        // return this.http<Character>(`${environment.url}/character/`)
    }
}

