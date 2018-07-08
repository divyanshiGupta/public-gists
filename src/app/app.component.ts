import { Component, ViewChild } from '@angular/core';
import { UserGistsService } from './user-gists.service';

const URL = 'https://gist.github.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gistJson: any;
  userName: string;
  gistFiles = [];
  gists = [];

  constructor ( private gistsService: UserGistsService
  ) { }

  listUserGists(e) {
    console.log(this.userName, 'name');
    console.log(e, 'event');
    this.gistsService.getUserGists(this.userName).
    subscribe(gists => this.gistJson = gists);
    if (this.gistJson) {
       this.gists = this.gistJson.map(gist => {
        return {
          fileName: this.userName + '/' + Object.keys(gist.files)[0],
          url: URL + '/' + this.userName + '/' + gist.id,
          language: gist.files[Object.keys(gist.files)[0]].language
        };
      });
    }
    console.log(this.gists, 'urls');
    console.log(this.gistJson, 'gists');
  }
}
