import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Button, Container } from 'react-bootstrap';
import style from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(
            register({
                name,
                email,
                password,
            })
        );
        form.reset();
    };

    return (
        <Container className={style.container}>
            <Form className='border rounded p-4' onSubmit={handleSubmit}>
                <p className={style.paragraph}>Register your account!</p>
                <Form.Group className='mb-3' controlId='inputName'>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        className={style.input}
                        type='name'
                        name='name'
                        title='Type-in your name'
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='inputEmail'>
                    <Form.Label>e-mail</Form.Label>
                    <Form.Control
                        className={style.input}
                        type='email'
                        name='email'
                        title='example@email.com'
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='inputPassword'>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        className={style.input}
                        type='password'
                        name='password'
                        title='Min 6 characters required'
                        minLength='6'
                        required
                    />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    );
};