import {Component} from '@angular/core';
import {IPost, IUser} from "./interfaces";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moduleAngular';
  chosenUser: IUser;
  chosenPost: IPost | null;

  constructor(private dataService: DataService) {
    this.dataService.storagePost.subscribe(value => this.chosenPost = value);
  }

  catch(user: IUser): void {
    this.chosenUser = user;
  }
}
