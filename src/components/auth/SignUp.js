import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp, signIn } from '../../api/auth'

import { Form, Button} from 'react-bootstrap'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()
    const onSignUp = (e) => {
        e.preventDefault()
        const { setUser} =props

        const credentials = {email, password, passwordConfirmation}

        signUp(credentials)
            .then(() => signIn(credentials))
            .then((res) => setUser(res.data.user))
            .then(() => navigate('/user'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
            })
        }

    return(<>
    <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    </>)
}

export default SignUp