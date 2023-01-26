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
                    let characterDetails: Character[] = []
                    characterDetails = character
                    return characterDetails
                })
            )
    }


    filterCharacters(query: any, page: number): Observable<Character[]> {
        return this.http
            .get(`${environment.url}/character/?name=${query}&page=${page}`)
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
}

