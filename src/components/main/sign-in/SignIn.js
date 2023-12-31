import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn(props) {
	return (
		<div className='container-fluid d-flex justify-content-center align-items-center'>
			<div className='w-100 d-flex flex-column justify-content-center align-items-center'>
				<h1 className='trademark fs-4'>Track It</h1>
				<div className='login-container d-flex flex-column justify-content-center'>
					<div className='welcome-back-container flex-column d-flex justify-content-center align-items-center'>
						<div className='w-100 title-text-container d-flex flex-column gap-2'>
							<h2 className='fs-1'>Welcome Back</h2>
							<p className='get-started-text'>
								Please enter your login information below!
							</p>
						</div>
						<div className='flex-column d-flex justify-content-center gap-3 w-100 mb-3'>
							<span>Email</span>
							<input
								type='text'
								placeholder='Enter your email'
								className='form-control'
							/>
							<span>Password</span>
							<input
								type='text'
								placeholder='Enter your password'
								className='form-control'
							/>
							<Link
								to='/forgot-password'
								className='forgot-password-text align-self-end'
							>
								Forgot Password?
							</Link>
						</div>
						<div className='w-100 d-flex flex-column justify-content-center gap-3'>
							<Link to='/dashboard'>
								<button className='btn login-btn w-100'>Login</button>
							</Link>
							<p className='no-acct-text text-center'>
								Don't have an account?{' '}
								<Link to='/sign-up' className='sign-up-text'>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
