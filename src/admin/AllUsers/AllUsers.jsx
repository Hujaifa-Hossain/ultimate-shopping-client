import { useGetUsersQuery } from '../../redux/apiSlice';
import Loading from '../../shared/Loading/Loading';
import './AllUsers.scss';

const AllUser = () => {

  const { data: Users, isLoading } = useGetUsersQuery();
  

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='all-users'>
      <table className='users-table'>
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {Users?.map((user) => <tr key={user?._id}>
            <td>{user?.firstName}</td>
            <td>{user?.email}</td>
            <td>

              delete
              {/* <AiFillEdit className='update' />
              <MdDelete className='delete' onClick={() => { deletePost(product?._id) }} /> */}
            </td>
          </tr>)}

        </tbody>
      </table>
    </div>
  );
};

export default AllUser;