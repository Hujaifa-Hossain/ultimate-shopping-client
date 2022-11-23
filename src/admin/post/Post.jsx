import './Post.scss';
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from '../../redux/apiSlice';

const Post = () => {

  const [create] = useCreateProductMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    create(data)
    reset()
  }
  return (
    <div className="post">
      <form className='post-form' onSubmit={handleSubmit(onSubmit)}>
      <h4>Warm Welcome!</h4>
        {/* <input type='file' placeholder='Products Image' {...register("img", { required: true })} /> */}

        <input type='text' placeholder='Product Name' {...register("title", { required: true })} />

        <input type='text' placeholder='Products Description' {...register("description", { required: true })} />


        <input type='text' placeholder='Products Price' {...register("price", { required: true })} />

        <input type='text' placeholder='Products Category' {...register("category", { required: true })} />

        <input type='text' placeholder='Products Color' {...register("color", { required: true })} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Post;