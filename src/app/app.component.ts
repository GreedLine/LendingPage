import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAnalysisModal, selectBusinessModal} from './reducers/analysisModal/modal.selectors';
import {ModalState} from './reducers/analysisModal/modal.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing';
  public analysisModal$: Observable<any> = this.store$.pipe(select(selectAnalysisModal));
  public businessModal$: Observable<any> = this.store$.pipe(select(selectBusinessModal));

  constructor(private store$: Store<ModalState>) {
  }


}
