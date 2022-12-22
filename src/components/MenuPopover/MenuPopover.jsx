import { useDispatch } from "react-redux";
import { useAuth } from "utils/hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { Button } from 'react-bootstrap';

export const MenuPopover = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <p className='mb-2'>email: {user.email}</p>
            <Button type='button' onClick={handleLogOut}>
                Logout
            </Button>
        </>
    );
};