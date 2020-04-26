import React from 'react';
import Header from '../component/Header';
import TipList from '../component/TipList';
import BottomButtons from '../component/BottomButtons';
import Drawer from '../component/Drawer';
import TipEditor from '../component/TipEditor';

import { withStyles } from '@material-ui/styles';
import withState from '../reducer';

const tips = [
  {
    id: "aaaaa",
    place: "Farmacia",
    tag: "Motivo",
    text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Phasellus et imperdiet erat."
  },
  {
    id: "bbbbbb",
    place: "Estação de Trem",
    tag: "Assassino",
    text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Phasellus et imperdiet erat."
  },
];

const drawerProps = {
  open: false,
  children: <div>oi</div>,
  onClose: () => null
}

const placesMock:Record<string, string> = {
  '1': 'Estação de Trem',
  '2': 'Porto',
  '3': 'Aeroporto',
}

const tagsMock:Record<string, string> = {
  '1': 'Motivo',
  '2': 'Assassino',
  '3': 'Arma',
}


const TipElement = withState('tip', ({ tip, actions }: any) => {
  return (
    <>
      <TipEditor {...tip.modal} onClose={actions.toggleModal} />
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
