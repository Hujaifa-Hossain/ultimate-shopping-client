import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import wood from '../../assets/common/wood.jpg';
import {GiTargetShot} from 'react-icons/gi';
import './LogIn.scss';

const LogIn = () => {
	return (
		<div className="login" style={{backgroundImage: `url(${wood})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

			<span><Link to='/'><IoHome/></Link></span>

			<form action="" className='login-form'>
<GiTargetShot/>
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