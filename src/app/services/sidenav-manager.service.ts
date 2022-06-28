import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UIState  {
  sideNavOpen: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SidenavManagerService {
  public _uiState: UIState = {
    sideNavOpen: false
  };

   // Observable emitting UI state values for depending components.
  private uiState$: BehaviorSubject<UIState> = new BehaviorSubject(
    this._uiState
  );
 

  // private method used by this service to set the UI state and update BehaviorSubject
  private set uiSettings(state: UIState) {
    this.uiState$.next(state);
  }

  // Components use this getter method to access the UI State
  public get uiSettings(): UIState {
    return this.uiState$.getValue();
  }

  // Call this public method to change the sidenav status. Write additional logic if needed
  public sideNavToggle(): void {
    this._uiState.sideNavOpen = !this._uiState.sideNavOpen;
    this.uiSettings = this._uiState; // call setter to store and emit changes
  }
}