import React, { ReactElement } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { withStyles } from '@material-ui/styles';

type Props = {
    classes?: AnyObject;
    actions: AnyObject;
    hasSelectedItems?: boolean;
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
  actions={},
  hasSelectedItems = false,
}: Props): ReactElement => (
  <div className={classes.root}>
    {
      hasSelectedItems ? (
        <>
          <Fab
            aria-label="favorite"
            color="default"
          >
            <FavoriteIcon />
          </Fab>
          <Fab
            aria-label="delete"
            color="secondary"
          >
            <DeleteIcon />
          </Fab>
          <Fab
            aria-label="edit"
            color="primary"
          >
            <EditIcon />
          </Fab>
        </>
      ) : (
        <Fab
          aria-label="add"
          color="primary"
          onClick={actions.toggleModal}
        >
          <AddIcon />
        </Fab>
      )
    }
  </div>
);

export default styles(BottomButtons);