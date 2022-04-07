import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItemHandler } from "../../api/doctors";
import { getDoctors } from "../../api/doctors";

const AddItem = () => {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, reset, } = useForm();
  const [isItemAdded, setIsItemAdded] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  const onSubmit = async (data) => {
    const response = await AddItemHandler(dispatch, data);
    if (response.status === 201) {
      setIsItemAdded(true);
      reset();
      dispatch(getDoctors);
    } else {
      setErrorResponse(JSON.stringify(response.data))
    }
  };

  return (
    <div className="row">
      <div className="p-0 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mx-3">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" {...register('name')} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="bio" placeholder="Enter Bio here" {...register('specialty')} />
          <input type="text"  /> 
        </form>
      </div>
    </div>
  )

}