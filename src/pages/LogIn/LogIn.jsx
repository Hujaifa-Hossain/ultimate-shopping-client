import { Link } from 'react-router-dom';
import wall from '../../assets/common/wall.jpg';
import wood from '../../assets/common/wood.jpg';
import './LogIn.scss';

const LogIn = () => {
	return (
		<div className="login" style={{backgroundImage: `url(${wood})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
			<form action="" className='login-form'>
				<h4>Welcome back!</h4>
				<input type="email" placeholder='Your Email' />
				<input type="password" placeholder='Your Password' />
				<input className='submit' type="submit" value='Log In' />
				<p>New here? <Link to='/register'>Sign Up</Link></p>
			</form>
		</div>
	);
};

export default LogIn;