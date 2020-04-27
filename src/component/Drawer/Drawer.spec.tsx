import React from 'react';
import { Drawer } from './';
import { mount } from 'enzyme';
import DrawerMui from '@material-ui/core/Drawer';

describe('component/Drawer', () => {
  it('should have correct ', () => {
    const fakeChildren = <div>fuzz</div>;
    const fakeProps = { open: false, onClose: jest.fn()}
    const wrap = mount(<Drawer {...fakeProps}> {fakeChildren} </Drawer>);
    const mui = wrap.find(DrawerMui);

    expect(mui).toHaveLength(1);
    expect(mui).toHaveProp('open', fakeProps.open);
    expect(mui).toHaveProp('onClose', fakeProps.onClose);
  });
});