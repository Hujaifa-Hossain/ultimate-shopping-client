import './AllProducts.scss';
import { useDeleteProductMutation, useGetProductsQuery } from '../../redux/apiSlice';
import Loading from '../../shared/Loading/Loading';
import shoe6 from '../../assets/shoes/shoe6.jpg';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

const AllProducts = () => {

  const { data: products, isLoading } = useGetProductsQuery();

  const [deletePost] = useDeleteProductMutation();

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='AllProducts'>
      <table className='products-table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          
          {products?.map((product) => <tr key={product?._id}>
            <td><img src={shoe6} alt="" /></td>
            <td>{product?.title}</td>
            <td className='actions'>
              <AiFillEdit />
              <MdDelete onClick={() => { deletePost(product?._id) }} />
            </td>
          </tr>)}

        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;