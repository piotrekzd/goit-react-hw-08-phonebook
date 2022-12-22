import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, Button, Container } from 'react-bootstrap';
import style from './LoginForm.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Container className={style.container}>
            <Form className='border rounded p-4' onSubmit={handleSubmit}>
                <p className={style.paragraph}>Please, log in</p>
                <Form.Group className='mb-3' controlId='inputEmail'>
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control
                        className={style.input}
                        name='email'
                        type='email'
                        title='example@email.com'
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='inputPassword'>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        className={style.input}
                        name='password'
                        type='password'
                        title='password'
                        minLength='6'
                        required
                    />
                </Form.Group>
                <Button type='submit'>Log in</Button>
            </Form>
        </Container>
    );
};