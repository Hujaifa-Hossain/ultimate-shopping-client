import './Register.scss';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import wood from '../../assets/common/wood.jpg';
import { useCreateUserMutation } from '../../redux/apiSlice';

const Register = () => {

	const [create] = useCreateUserMutation();

	const { register, handleSubmit, reset } = useForm();

	const onSubmit = data => {
		console.log(data)
		create(data)
		reset()
	}

	return (
		<div className="register" style={{ backgroundImage: `url(${wood})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
			<span><Link to='/'><IoHome /></Link></span>
			<form className='register-form' onSubmit={handleSubmit(onSubmit)}>
				<h4>Warm Welcome!</h4>

				<input type='text' placeholder='First Name' {...register("firstName", { required: true })} />

				<input type='text' placeholder='Last Name' {...register("lastName", { required: true })} />

				<input type='email' placeholder='Your Email' {...register("email", { required: true })} />

				<input type="password" placeholder='Your Password' {...register("password", { required: true })} />
				<input className='submit' type="submit" value='Sign Up' />
				<p>Already user? <Link to='/login'>Log In</Link></p>
			</form>
		</div>
	);
};

export default Register;