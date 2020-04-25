import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { shallow, mount } from 'enzyme';

import TipList from './';

describe('component/TipList', () => {
    it('Check empty list', () => {
        const wrap = mount(<TipList tips={[]} />);
        expect(wrap).toHaveText('Sem Dicas Registradas');
    });

    it('Check list with items', () => {
        const clickSpec = jest.fn();
        const tip = { id: 'foo', place: 'bar', tag: 'fizz', text: 'fuzz'}
        const wrap = mount(<TipList tips={[tip]} handleSelection={clickSpec} />);

        wrap.find(ListItem).simulate('click');
        expect(clickSpec).toHaveBeenCalledTimes(1);
    });
});