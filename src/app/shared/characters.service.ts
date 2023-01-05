import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError, map } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Character } from './characters.model'

@Injectable({
    providedIn: 'root',
})

export class CharactersService {
    constructor(private _http: HttpClient) {
    }

    getAllCharacters(): Observable<Character[]> {
        return this._http
            .get(`${environment.url}/character`)
            .pipe(
                catchError(() => {
                    const error: string = `something went wrong when trying to get the characters data`
                    return throwError(() => error)
                }),
                map((characters: any) => {
                    let charactersList: Character[] = []
                    characters.content.map((element: any) => {
                        const character: any = {
                            id: element.id,
                            name: element.name,
                            status: element.status,
                            species: element.species,
                            type: element.type,
                            gender: element.gender,
                            origin: element.origin,
                            location: element.location,
                            image: element.image,
                            episode: element.episode,
                            url: element.url,
                            created: element.created
                        }

                        charactersList.push(character)
                    })
                    const responseCharactersList: any = {
                        charactersList,
                        info: characters.info,
                    }
                    return responseCharactersList
                })
            )
    }
}

