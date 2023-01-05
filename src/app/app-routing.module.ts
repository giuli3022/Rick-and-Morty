// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CharacterComponent } from './modules/views/character/character.component'
import { CharactersListComponent } from './modules/views/characters-list/characters-list.component'
import { HomeComponent } from './modules/views/home/home.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'character',
		component: CharacterComponent
	},
	{
		path: 'characters',
		component: CharactersListComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
