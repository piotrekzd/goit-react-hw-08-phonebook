import { useAuth } from 'utils/hooks/useAuth';
import { MenuPopover } from 'components/MenuPopover/MenuPopover';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const popover = (
    <Popover>
        <Popover.Header>Menu</Popover.Header>
        <Popover.Body>
            <MenuPopover />
        </Popover.Body>
    </Popover>
);

export const UserMenu = () => {
    const { user } = useAuth();

    if (!user) {
        return;
    };

    return (
        <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
            <Button variant='secondary'>Hi, '{user.name}'</Button>
        </OverlayTrigger>
    );
};
