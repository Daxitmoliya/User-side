import React, { useState } from 'react';
import { addadmin } from '../../services/action/student.action';
import { useDispatch } from 'react-redux';

const AddDoctor = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    designation: '',
    address: '',
    mobile: '',
    image: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updatedValue = name === 'image' ? files[0] : value;

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    dispatch(addadmin(formDataWithImage));
    console.log('Form submitted:', formData);
  };

  return (
    <section className="adddoc">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ms-panel">
              <div className="ms-panel-header ms-panel-custom">
                <h6>Add Doctors</h6>
                <a className="ms-text-primary" href="#">
                  Doctors List
                </a>
              </div>
              <div className="ms-panel-body">
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom01">
                        First Name
                      </label>
                      <input
                        required
                        placeholder="First Name"
                        type="text"
                        id="validationCustom01"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom03">
                        Email Address
                      </label>
                      <input
                        required
                        placeholder="Email Address"
                        type="email"
                        id="validationCustom03"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom05">
                        Designation
                      </label>
                      <input
                        required
                        placeholder="Enter Designation"
                        type="text"
                        id="validationCustom05"
                        className="form-control"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom07">
                        Address
                      </label>
                      <input
                        required
                        placeholder="Enter Address"
                        type="text"
                        id="validationCustom07"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom09">
                        Mobile
                      </label>
                      <input
                        required
                        placeholder="Mobile No."
                        type="number"
                        id="validationCustom09"
                        className="form-control"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom10">
                        Doctor Image
                      </label>
                      <div className="custom custom-file">
                        <input
                          id="validationCustom10"
                          type="file"
                          lang="en"
                          className="custom-file-input"
                          name="image"
                          onChange={handleChange}
                        />
                        <label htmlFor="validationCustom10" className="custom-file-label">
                          {formData.image ? formData.image.name : 'Choose file...'}
                        </label>
                        {formData.image && (
                          <img
                            src={URL.createObjectURL(formData.image)}
                            alt="Preview"
                            style={{ maxWidth: '100%', marginTop: '10px' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="mb-3 form-group col-md-6">
                      <label className="form-label" htmlFor="validationCustom12">
                        Date of Birth
                      </label>
                      <input
                        required
                        placeholder="Date of Birth"
                        type="text"
                        id="validationCustom12"
                        className="form-control"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="mt-4 d-inline w-20 btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
