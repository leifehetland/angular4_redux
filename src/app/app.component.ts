import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux';
  @select('counter') count;
  // Gets us messaging.newMessages prop by using array in @select
  // @select(['messaging', 'newMessages']) newMessages;
  // Another way to get there
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // ngRedux.subscribe(() => {
    //   console.log('NGREDUX.GETSTATE()', ngRedux.getState());
    // });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
