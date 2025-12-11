import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './List.css';


const List = ({url}) => {
  const [list, setList] = useState([]);
  

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/foods/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching list');
      }
    } catch (error) {
      console.error(error);
      toast.error('Server connection failed');
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success('Food item removed');
        await fetchList();
      } else {
        toast.error(response.data.message || 'Failed to remove item');
      }
    } catch (error) {
      console.error(error);
      toast.error('Server connection failed');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <ToastContainer />
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price} ETB</p>
            <p onClick={() => removeFood(item._id)} className="cursor">
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
