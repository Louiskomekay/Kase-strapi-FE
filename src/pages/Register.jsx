import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from 'react-router-dom'
import styled from 'styled-components'
import KaseLogoImg from '../images/KaseLogoImg.webp'
import axios from "axios";
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await axios.post('http://localhost:1337/api/auth/local/register', data)
        toast.success('Signup complete');
        return redirect('/Login');
    } catch (error) {
        const errorMessage = error.message || 'Please check your credentials'
        toast.error(errorMessage);
        return null;
    }
};

const Register = () => {
    // const [user, setUser] = useState({ email: '', username: '', password: '' });
    // const signup = async () => {
    //     try {
    //         if (user.username && user.email && user.password) {
    //             const res = await axios.post('http://localhost:1337/auth/local/register', user)
    //             console.log(res);
    //             toast.success('Signup successful');
    //         }
    //     } catch (error) {
    //         toast.error(error.message, {
    //             hideProgressBar: true
    //         })
    //     }
    // }
    // const handleUserChange = ({ target }) => {
    //     const { name, value } = target;
    //     setUser((currentUser) => ({ ...currentUser, [name]: value, }))
    // }


    return (
        <Wrapper>
            <div className="form-container">
                {/* forminput */}
                <div className="form">
                    <Form method="POST">
                        <div className="form-copy">
                            <h2>Welcome</h2>
                            <p>Register a new account to start shopping.</p>
                        </div>

                        <FormInput type='text' label='username' name='username' />
                        <FormInput type='email' label='email' name='email' />
                        <FormInput type='password' label='password' name='password' />

                        {/* <FormInput type='text' label='username' name='username' placeholder='Username' value={user.username} onChange={handleUserChange} />
                        <FormInput type='email' label='email' name='email' placeholder='John@yourmail.com' value={user.email} onChange={handleUserChange} />
                        <FormInput type='password' label='password' name='password' placeholder='Enter password' value={user.password} onChange={handleUserChange} /> */}

                        <div className="buttons">
                            <SubmitBtn text='register' className='btn submitBtn' />
                        </div>

                        <button className="strokeBtn strokeButton">Guest user</button>

                        <div className="crumbMessage">
                            <p>Already have an account? <Link to='/Login'> <span className="crumbRegister">Login</span> </Link></p>
                        </div>
                    </Form>
                </div>
                {/* image */}
                <div className="kaseImg pseudoBackgroundColor"><img src={KaseLogoImg} alt="image" /></div>
            </div>
        </Wrapper>
    )
}

export default Register;

// STYLING
const Wrapper = styled.section`
    height: 100vh;
    .form-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .kaseImg {
        overflow: hidden;
        height: 100vh;
    }
    .kaseImg img {
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    .form {
        display: grid;
        place-content: center;
    }
    .form h2 {
        font-size: var(--fs-600);
        color: var(--Blue1);
    }
    .form-copy {
        margin-bottom: 1.4rem;
    }
    .form-copy p{
        font-size: var(--fs-400);
    }
    .submitBtn {
        width: 33rem;
        margin-bottom: 1rem;
    }
    .buttons {
        margin-top: 2rem;
    }
    .strokeButton {
        width: 33rem;
        padding: 1.3rem;
    }
    .crumbMessage {
        margin-top: 1rem;
    }
    .crumbRegister {
        color: var(--Blue1);
        transition: var(--smooth);
    }
    .crumbRegister:hover {
        color: var(--Blue2);
    }

    /* Tablet */
    @media (max-width:74em) {
        .form-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        }
        .strokeButton, .submitBtn {
        width: 33rem;
        }
        .kaseImg {
        overflow: hidden;
        height: 20rem;
        grid-row-start: 0;
        grid-row-end: 1;
        }
    }

    /* Mobile */
    @media (max-width:33.75em) {
        .form-container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        }
        .strokeButton, .submitBtn {
        width: 23rem;
        }
        .kaseImg {
        overflow: hidden;
        height: 20rem;
        grid-row-start: 0;
        grid-row-end: 1;
        }
    }
`