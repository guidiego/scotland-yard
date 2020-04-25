import React from 'react';
import Header from '../component/Header';
import TipList from '../component/TipList';
import BottomButtons from '../component/BottomButtons';

import { withStyles } from '@material-ui/styles';

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

const App = ({ classes }: any) => (
  <div className={classes.root}>
    <Header />
    <div className={classes.list}>
      <TipList tips={tips}/>
    </div>
    <BottomButtons />
  </div>
);


export default withStyles((theme) => ({
}))(App);
