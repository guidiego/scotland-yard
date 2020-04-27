import { v4 as uuid } from 'uuid';
import { SAVE_TIP, TOGGLE_MODAL } from './constants';
import { Reducer } from 'react';

type State = {
    tips: Record<string, Tip>;
    selected: string[];
    modal: {
        open: boolean;
        tipData: Tip;
    };
}

type Payload = Tip;

const emptyTip = {
  tag: '',
  text: '',
  place: '',
};

export const initialState: State = {
  tips: {},
  selected: [],
  modal: {
    open: false,
    tipData: emptyTip
  },
}

export const reducerFn: Reducer<any, any> = (state: State, { type, payload }: ReducerAction<Payload>) => {
  switch(type) {
    case SAVE_TIP:
      const tipId = payload?.id || uuid();
      const tip = { ...payload, id: tipId };
      const tips = { ...state.tips, [tipId]: tip };
      return { ...state, tips };
    case TOGGLE_MODAL:
      const modal = { open: !state.modal.open, tipData: payload || emptyTip };
      return { ...state, modal }
    default:
      return state;
  }
}

export const tipReducerOpts: [Reducer<any, any>, any] = [reducerFn, initialState];