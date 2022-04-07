/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItemHandler, getDoctors } from '../../api/doctors';

const AddItem = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [isItemAdded, setIsItemAdded] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  const onSubmit = async (data) => {
    const response = await AddItemHandler(dispatch, data);
    if (response.status === 201) {
      setIsItemAdded(true);
      reset();
      dispatch(getDoctors);
    } else {
      setErrorResponse(JSON.stringify(response.data));
    }
  };

  return (
    <div className="row">
      <div className="p-0 d-flex flex-column justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mx-3">
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" {...register('name')} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" {...register('image')} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="specialty" placeholder="Enter doctor speciality here" {...register('specialty')} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="bio" placeholder="Enter Bio here" {...register('bio')} />
          <input type="number" className="form-control m-1" id="experience" placeholder="Enter Experience" {...register('experience')} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
          {
            isItemAdded && (
              <div className="alert alert-success mt-3 ms-1" role="alert">
                Doctor Added Successfully
              </div>
            )
          }

          {
            errorResponse && (
              <div className="alert alert-danger mt-3 ms-1" role="alert">
                {errorResponse}
              </div>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default AddItem;
