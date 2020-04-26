import React, { ReactNode } from 'react';
import DrawerMui from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/styles';

type Props = {
    open: boolean;
    children?: ReactNode | null,
    classes?: any;
    onClose: () => any;
};

const styles = withStyles((theme) => ({
    content: {
        width: '350px',
        padding: theme.spacing(2),
    }
}))

export const Drawer = ({
    classes = {},
    children = null,
    ...drawerProps
}: Props) => (
    <DrawerMui anchor='right' {...drawerProps}>
        <div className={classes.content}>
            { children }
        </div>
    </DrawerMui>
)

export default styles(Drawer)