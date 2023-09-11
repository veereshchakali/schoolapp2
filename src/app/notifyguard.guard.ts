import { CanDeactivateFn } from '@angular/router';

export const notifyguardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
