import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDoctors, deleteDoctor } from '../../api/doctors';
import './delete.css';
import Modal from './modal';
import { deleteOneDoctor } from '../../redux/doctors/doctors';

const DeleteItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors);
  }, []);

  let deleteId = 0;

  const doctors = useSelector((state) => state.doctors.doctors) || [];

  const handleDelete = async (id) => {
    dispatch(deleteDoctor(id));
    dispatch(deleteOneDoctor(id));
  };

  return (
    <div className="container">
      <div className="row mx-5">
        <div className="col-12">
          <ul className="list-group">
            {doctors.map((doctor) => (
              <li key={doctor.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between">
                    <span className="delete-list-item-name">{doctor.name}</span>
                    <img src={doctor.image} alt={doctor.name} className="mx-5" />
                  </div>
                  <div>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" type="submit" onClick={() => { deleteId = doctor.id; }}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal onOKPressed={() => {
        handleDelete(deleteId);
      }}
      />
    </div>
  );
};
export default DeleteItem;
