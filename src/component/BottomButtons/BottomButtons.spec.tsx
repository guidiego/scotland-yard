import React from 'react';
import { BottomButtons } from './';
import { mount } from 'enzyme';
import Fab from '@material-ui/core/Fab';

describe('component/BottomButtons', () => {
    it('Check if render 1 fab', () => {
        const wrap = mount(<BottomButtons />);
        expect(wrap.find(Fab)).toHaveLength(1);
    });

    it('Check if render 3 fabs', () => {
        const wrap = mount(<BottomButtons hasSelectedItems/>);
        expect(wrap.find(Fab)).toHaveLength(3);
    });
});