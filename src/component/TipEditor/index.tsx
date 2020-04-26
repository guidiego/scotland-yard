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
    newTip: Tip;
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
    newTip,
    classes = {},
    tags = {},
    places = {},
}: Props) =>  (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">Nova Dica</DialogTitle>
        <DialogContent>
            <FormControl className={classes.formControl}>
                <InputLabel id="place-select-label">Lugar</InputLabel>
                <Select
                    labelId="place-select-label"
                    id="place-select"
                    value={newTip.place}
                    onChange={() => false}
                    fullWidth
                    variant="filled"
                >
                    {
                        Object.keys(places).map((id) => (
                            <MenuItem key={id} value={id}>{places[id]}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="tag-select-label">Questão</InputLabel>
                <Select
                    labelId="tag-select-label"
                    id="tag-select"
                    value={newTip.tag}
                    onChange={() => false}
                    fullWidth
                    variant="filled"
                >
                    {
                        Object.keys(tags).map((id) => (
                            <MenuItem key={id} value={id}>{tags[id]}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField
                variant="filled"
                multiline
                rows={4}
                fullWidth
                className={classes.formControl}
                id="tip-text"
                label="Dica"
                value={newTip.text}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Fechar
            </Button>
            <Button onClick={onClose} color="primary" autoFocus>
                Salvar
            </Button>
        </DialogActions>
    </Dialog>
);

export default styles(TipEditor);