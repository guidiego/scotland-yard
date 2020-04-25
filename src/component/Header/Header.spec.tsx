import React from 'react';
import Header from './';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';

describe('component/Header', () => {
    it('Check HTML output', () => {
        const wrap = shallow(<Header />);
        expect(wrap).toMatchSnapshot();
    });
});