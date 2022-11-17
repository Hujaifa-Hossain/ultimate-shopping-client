import './Register.scss';
import wood from '../../assets/common/wood.jpg';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';

const Register = () => {
	return (
		<div className="register" style={{backgroundImage: `url(${wood})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
			<span><Link to='/'><IoHome/></Link></span>
			<form action="" className='register-form'>
				<h4>Warm Welcome!</h4>
				<input type="text" placeholder='First Name' />
				<input type="text" placeholder='Last Name' />
				<input type="email" placeholder='Your Email' />
				<input type="password" placeholder='Your Password' />
				<input className='submit' type="submit" value='Log In' />
				<p>Already user? <Link to='/login'>Log In</Link></p>
			</form>
		</div>
	);
};

export default Register;