import { createAction, props } from '@ngrx/store';

export enum ErrorActionTypes {
  ERROR_SEND = '[ERROR] Error send',
}

export const sendError = createAction(ErrorActionTypes.ERROR_SEND, props<{ errorMessage: string }>());
