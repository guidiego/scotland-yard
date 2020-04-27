import React from 'react';
import { TipEditor } from './';
import { shallow } from 'enzyme';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


describe('component/TipEditor', () => {
  it('should render correct without data', () => {
    const tags = { '1': 'foo' };
    const places = { '1': 'bar' };
    const text = 'foobar';
    const tipData = { tag: '1', place: '1', text};
    const fakeProps = { open: false, onClose: jest.fn(), tags, places, tipData }
    const wrap = shallow(<TipEditor {...fakeProps} />);
    const wrapSelects = wrap.find(Select);
    const wrapTextField = wrap.find(TextField);

    expect(wrapSelects).toHaveLength(2);
    expect(wrapSelects.first()).toHaveProp('value', '1');
    expect(wrapSelects.last()).toHaveProp('value', '1');
    expect(wrapTextField).toHaveProp('value', text);
  });
});

