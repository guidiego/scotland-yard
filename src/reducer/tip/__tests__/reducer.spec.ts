import { v4 as uuid } from 'uuid';
import { reducerFn, initialState } from '../reducer';
import { SAVE_TIP, TOGGLE_MODAL } from '../constants';

describe('reducer/tip', () => {
  const fakeBaseTip = { place: 'foo', tag: 'bar', text: 'fuzz' };
  it('should insert new tip on SAVE_TIP action.type', () => {
    const state = reducerFn(initialState, {
      type: SAVE_TIP,
      payload: fakeBaseTip,
    })

    const ids = Object.keys(state.tips);
    expect(ids).toHaveLength(1);
    expect(state).toHaveProperty('selected', initialState.selected)
    expect(state).toHaveProperty('modal', initialState.modal)
    expect(state).not.toHaveProperty('tips', initialState.tips)
    expect(state).toHaveProperty(`tips.${ids[0]}`, {...fakeBaseTip, id: ids[0]})
  });

  it('should update tip on SAVE_TIP action.type', () => {
    const fakeTip = { id: uuid(), ...fakeBaseTip };
    const newTipData = { text: 'fizz', tag: 'foobar', place: 'zoom'};
    const newTip = { ...fakeTip, ...newTipData };
    const prevState = { ...initialState, tips: { [fakeTip.id]: fakeTip} };
    const state = reducerFn(prevState, {
      type: SAVE_TIP,
      payload: newTip,
    });

    expect(state).toHaveProperty('selected', prevState.selected)
    expect(state).toHaveProperty('modal', prevState.modal)
    expect(state).not.toHaveProperty('tips', prevState.tips)
    expect(state).toHaveProperty(`tips.${fakeTip.id}.place`, newTipData.place)
    expect(state).toHaveProperty(`tips.${fakeTip.id}.tag`, newTipData.tag)
    expect(state).toHaveProperty(`tips.${fakeTip.id}.text`, newTipData.text)
  });

  it('should open modal on TOGGLE_MODAL action.type', () => {
    const state = reducerFn(initialState, {
      type: TOGGLE_MODAL,
    });

    expect(state).toHaveProperty('selected', initialState.selected)
    expect(state).toHaveProperty('tips', initialState.tips)
    expect(state).toHaveProperty('modal.open', true)
    expect(state).toHaveProperty('modal.tipData', initialState.modal.tipData);
  });

  it('should open modal with payload data on TOGGLE_MODAL action.type', () => {
    const state = reducerFn(initialState, {
      type: TOGGLE_MODAL,
      payload: fakeBaseTip,
    });

    expect(state).toHaveProperty('selected', initialState.selected)
    expect(state).toHaveProperty('tips', initialState.tips)
    expect(state).toHaveProperty('modal.open', true)
    expect(state).toHaveProperty('modal.tipData', fakeBaseTip);
  });

  it('should close modal on TOGGLE_MODAL action.type', () => {
    const prevState = { ...initialState, modal: { ...initialState.modal, open: true }}
    const state = reducerFn(prevState, { type: TOGGLE_MODAL });

    expect(state).toHaveProperty('selected', prevState.selected)
    expect(state).toHaveProperty('tips', prevState.tips)
    expect(state).toHaveProperty('modal.open', false)
    expect(state).toHaveProperty('modal.tipData', prevState.modal.tipData);
  })
});