import './Post.scss';
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from '../../redux/apiSlice';

const Post = () => {

  const [create] = useCreateProductMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {

    const formData = new FormData();
    formData.append('img', data.img[0])
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('price', data.price)
    formData.append('color', data.color)
    console.log(await data)

    create(await data)
    // reset()
  }
  return (
    <div className="post">
      <form className='post-form' onSubmit={handleSubmit(onSubmit)}>
        <h4>Warm Welcome!</h4>
        <input type='file' placeholder='Products Image' {...register("img", { required: true })} />

        <input type='text' placeholder='Product Name' {...register("title", { required: true })} />

        <input type='text' placeholder='Product Description' {...register("description", { required: true })} />

        <input type='text' placeholder='Product Price' {...register("price", { required: true })} />

        <input type='text' placeholder='Product Category' {...register("category", { required: true })} />

        <input type='text' placeholder='Product Color' {...register("color", { required: true })} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Post;