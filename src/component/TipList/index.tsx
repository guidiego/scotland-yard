import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = withStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
    },
    listItem: {
        borderStyle: 'solid',
        borderColor: theme.palette.grey[400],
        borderWidth: 0,
        borderBottomWidth: '1px',
    },
    card: {
        margin: theme.spacing(2),
        textAlign: 'center'
    }
}));

type Props = {
    tips: Tip[];
    selected?: string[];
    handleSelection?: () => void;
    classes: any;
}

export const TipList = ({
    tips,
    handleSelection,
    selected = [],
    classes = {},
}: Props) => tips.length === 0 ? (
    <Card className={classes.card}>
        <CardHeader
            title="Sem Dicas Registradas"
            subheader="Clique no botão + para adicionar uma nova"
        />
    </Card>
) : (
    <List className={classes.root}>
        {
            tips.map((tip: Tip) => (
                <ListItem key={tip.id} button className={classes.listItem} onClick={handleSelection}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={selected.indexOf(tip.id || '') !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': `tip-list-item${tip.id}` }}
                        />
                    </ListItemIcon>
                    <ListItemText
                        id={`tip-list-item${tip.id}`}
                        primary={tip.text}
                        secondary={`${tip.place} • ${tip.tag}`}
                    />
                </ListItem>
            ))
        }
    </List>
);

export default styles(TipList)