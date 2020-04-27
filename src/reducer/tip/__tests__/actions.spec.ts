import { saveTip, toggleModal } from '../actions';
import { SAVE_TIP, TOGGLE_MODAL } from '../constants';

describe('reducer/tip/actions', () => {
  const dispatch = jest.fn();
  const fakeTip = { tag: 'foo', place: 'bar', text: 'fizz'};

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('save action', () => {
    const saveTipAction = saveTip(dispatch);
    saveTipAction(fakeTip);

    expect(dispatch).toHaveBeenCalledWith({
      type: SAVE_TIP,
      payload: fakeTip,
    });
  });

  it('toggle modal', () => {
    const toggleModalAction = toggleModal(dispatch);
    toggleModalAction();

    expect(dispatch).toHaveBeenCalledWith({ type: TOGGLE_MODAL });
  });

  it('toggle modal with payload', () => {
    const toggleModalAction = toggleModal(dispatch);
    toggleModalAction(fakeTip);

    expect(dispatch).toHaveBeenCalledWith({ type: TOGGLE_MODAL, payload: fakeTip });
  });
});