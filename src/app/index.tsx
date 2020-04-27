import React from 'react';
import Header from '../component/Header';
import TipList from '../component/TipList';
import BottomButtons from '../component/BottomButtons';
import Drawer from '../component/Drawer';
import TipEditor from '../component/TipEditor';

import { withStyles } from '@material-ui/styles';
import withState from '../reducer';

const drawerProps = {
  open: false,
  children: <div>oi</div>,
  onClose: (): any => null
}

const TipElement = withState('tip', ({ tip, actions }: any) => {
  return (
    <>
      <TipEditor
        {...tip.modal}
        onClose={actions.toggleModal}
      />
      <TipList tips={Object.values(tip.tips)}/>
      <BottomButtons actions={actions} />
    </>
  )
})

const App = ({ classes }: any) => (
  <div className={classes.root}>
    <Drawer {...drawerProps} />
    <Header />
    <TipElement />
  </div>
);


export default withStyles((theme) => ({
}))(App);
