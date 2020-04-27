/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Reducer } from 'react';
import { mount } from 'enzyme';

import { withStateConstructor } from '.';

describe('reducer/hoc', () => {
  const fakeReducer = jest.fn() as Reducer<any, any>;
  const fakeProps = { foo: 'bar' };
  const fakeAction = jest.fn();
  const fakeWrappedAction = jest.fn().mockReturnValue(fakeAction);
  const fakeActions = { fizz: fakeWrappedAction };

  it('create component with state', () => {
    const fakeStates = {
      'foo': {
        reducer: [fakeReducer, fakeProps],
        actions: fakeActions,
      }
    } as AvailableStates;

    const fakeActionParam = 'fizzfuzz';
    const TestComponent = ({ foo, actions }: any): null => {
      expect(foo).toBe(fakeProps);
      actions.fizz(fakeActionParam);
      return null;
    }

    const withState = withStateConstructor(fakeStates);
    const Test = withState('foo', TestComponent);

    const wrap = mount(<Test />);
    expect(fakeWrappedAction).toHaveBeenCalledTimes(1);
    expect(fakeAction).toHaveBeenCalledWith(fakeActionParam);
    expect(wrap.html()).toBe('');
  });
})