import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { withStyles } from '@material-ui/styles';

type Props = {
    classes?: any;
    hasSelectedItems?: boolean
}

const styles = withStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        maxWidth: '60px',
        display: 'flex',
        flexDirection: 'column',
        '& > *' : {
            marginTop: theme.spacing(2)
        }
    },
}));

export const BottomButtons = ({
    classes = {},
    hasSelectedItems = false,
}: Props) => (
    <div className={classes.root}>
        {
            hasSelectedItems ? (
                <>
                    <Fab color="default" aria-label="favorite">
                        <FavoriteIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="delete">
                        <DeleteIcon />
                    </Fab>
                    <Fab color="primary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </>
            ) : (
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            )
        }
    </div>
);

export default styles(BottomButtons);