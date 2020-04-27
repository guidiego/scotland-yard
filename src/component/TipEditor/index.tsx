import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

type Props = {
    open: boolean;
    onClose: () => any;
    classes?: any;
    places: Record<string, string>;
    tags: Record<string, string>;
    tipData: Tip;
}

const styles = withStyles((theme) => ({
  formControl: {
    display: 'block',
    width: '300px',
    marginBottom: theme.spacing(2),
  }
}));


export const TipEditor = ({
  open,
  onClose,
  tipData,
  classes = {},
  tags = {},
  places = {},
}: Props) =>  (
  <Dialog
    aria-describedby="alert-dialog-description"
    aria-labelledby="alert-dialog-title"
    onClose={onClose}
    open={open}
  >
    <DialogTitle id="alert-dialog-title">Nova Dica</DialogTitle>
    <DialogContent>
      <FormControl className={classes.formControl}>
        <InputLabel id="place-select-label">Lugar</InputLabel>
        <Select
          fullWidth
          id="place-select"
          labelId="place-select-label"
          onChange={() => false}
          value={tipData.place}
          variant="filled"
        >
          {
            Object.keys(places).map((id) => (
              <MenuItem
                key={id}
                value={id}
              >{places[id]}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="tag-select-label">Questão</InputLabel>
        <Select
          fullWidth
          id="tag-select"
          labelId="tag-select-label"
          onChange={() => false}
          value={tipData.tag}
          variant="filled"
        >
          {
            Object.keys(tags).map((id) => (
              <MenuItem
                key={id}
                value={id}
              >{tags[id]}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <TextField
        className={classes.formControl}
        fullWidth
        id="tip-text"
        label="Dica"
        multiline
        rows={4}
        value={tipData.text}
        variant="filled"
      />
    </DialogContent>
    <DialogActions>
      <Button
        color="primary"
        onClick={onClose}
      >
                Fechar
      </Button>
      <Button
        autoFocus
        color="primary"
        onClick={onClose}
      >
                Salvar
      </Button>
    </DialogActions>
  </Dialog>
);

export default styles(TipEditor);