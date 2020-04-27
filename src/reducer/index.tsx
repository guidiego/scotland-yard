/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer, Dispatch } from 'react';

import { tipReducerOpts } from './tip/reducer';
import * as tipActions from './tip/actions';

const mapActionsWithDispatch = (dispatch: Dispatch<any>, actions: Record<any, any>): Record<any, any> => {
  const keys = Object.keys(actions);
  const newActions = ({} as Record<any, any>);

  keys.forEach((key) => {
    newActions[key] = actions[key](dispatch);
  });

  return newActions;
}

export const withStateConstructor = (
  availableState: AvailableStates
) => (
  states: string | string[],
  Component: React.FC
) => (
  props: any
): React.ReactElement => {
  const reducers = typeof states === 'string' ? [states] : states;
  const stateProps: Record<string, any> = { actions: {} };

  reducers.forEach((reducerKey) => {
    const [fn, initialState] = availableState[reducerKey].reducer
    const [state, dispatch] = useReducer(fn, initialState);
    stateProps[reducerKey] = state;
    stateProps.actions = {...stateProps.actions, ...mapActionsWithDispatch(dispatch, availableState[reducerKey].actions)}
  })

  return (
    <Component
      {...props}
      {...stateProps}
    />
  )
}

export const withState = withStateConstructor({
  tip: {
    reducer: tipReducerOpts,
    actions: tipActions,
  }
});

export default withState