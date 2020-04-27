import { Dispatch } from 'react'
import { SAVE_TIP, TOGGLE_MODAL } from './constants';

export const saveTip = (dispatch: Dispatch<ReducerAction<Tip>>) =>
  (tip: Tip): void =>
    dispatch({
      type: SAVE_TIP,
      payload: tip,
    });

export const toggleModal = (dispatch: Dispatch<ReducerAction<Tip>>) =>
  (tip: NotRequired<Tip> = undefined): void =>
    dispatch({
      type: TOGGLE_MODAL,
      payload: tip,
    });