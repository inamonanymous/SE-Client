import React, { useState, useEffect } from 'react';

const Request = ({ handleClose, show, children, value }) => {
  const [formData, setFormData] = useState({
    args_student_number: '',
    args_student_section: '',
    args_student_department: '',
    args_student_year: '',
    args_student_email_address: '',
    args_student_firstname: '',
    args_student_surname: '',
    args_requested_end_date: '',
    args_requested_item: value !== null ? value : '', // Set the initial value for the requested item
  });

  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validity
  const [loading, setLoading] = useState(false);
  const showHideClassName = show ? 'modal display-block open' : 'modal display-none';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch student number from local storage
        const studentNumber = localStorage.getItem('student_number');
        if (!studentNumber) {
          throw new Error('Student number not found in local storage');
        }

        // Fetch data from endpoint using student number
        const response = await fetch('http://localhost:5000/user/get_current_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ args_student_number: studentNumber }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFormData(prevData => ({
          ...prevData,
          ...data,
          args_requested_item: value !== null ? value : prevData.args_requested_item,
        }));
        setIsValidEmail(validateEmail(data.args_student_email_address)); // Validate the fetched email
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    if (show) {
      fetchData();
    }
  }, [show, value]);

  const handleSubmit = async () => {
    console.log('Submitting form data:', formData);
    try {
      // Send the form data to the endpoint
      const response = await fetch('http://localhost:5000/user/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const responseBody = await response.json();
        throw new Error(`Failed to submit, user can't request if there's already a pending request and user cant pick behind dates`);
      }
      
      // Close the modal
      handleClose();
      // Show alert after successful submission
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log(error);
      alert(error);
    }
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, args_student_email_address: email });
    setIsValidEmail(validateEmail(email));
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <h3>Fill up Student Information</h3>
        <form className="two-column-form">
          <div className="form-column">
            <div>
              <label>Equipment ID</label>
              <input type="text" placeholder={value} disabled />
            </div>

            <div>
              <label>First name</label>
              <input
                readOnly
                type="text"
                name="args_student_first"
                id="args_student_first"
                placeholder="Enter first name"
                value={formData.args_student_firstname}
              />
            </div>

            <div>
              <label>Last name</label>
              <input
                readOnly
                type="text"
                name="args_student_surname"
                id="args_student_surname"
                placeholder="Enter last name"
                value={formData.args_student_surname}
              />
            </div>

            <div>
              <label>Student Number</label>
              <input
                readOnly
                type="text"
                name="args_student_number"
                id="args_student_number"
                placeholder="Enter student number"
                value={formData.args_student_number}
              />
            </div>
          </div>

          <div className="form-column">
            <div>
              <label>Department</label>
              <input
                readOnly
                type="text"
                name="args_student_department"
                id="args_student_department"
                placeholder="Enter department"
                value={formData.args_student_department}
              />
            </div>

            <div>
              <label>Year</label>
              <input
                readOnly
                type="text"
                name="args_student_year"
                id="args_student_year"
                placeholder="Enter year"
                value={formData.args_student_year}
              />
            </div>

            <div>
              <label>Section</label>
              <input
                readOnly
                type="text"
                name="args_student_section"
                id="args_student_section"
                placeholder="Enter section"
                value={formData.args_student_section}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                readOnly
                type="email"
                name="args_student_email_address"
                id="args_student_email_address"
                placeholder="Enter email address"
                value={formData.args_student_email_address}
                className={!isValidEmail ? 'invalid' : ''}
              />
              {!isValidEmail && <p className="error-message">Please enter a valid email address</p>}
            </div>

            <div className="form-column" style={{ transform: 'translateX(-50%)' }}>
              <label>Expected return date</label>
              <input
                type="date"
                name="args_requested_end_date"
                id="args_requested_end_date"
                placeholder="Enter return date"
                value={formData.args_requested_end_date}
                onChange={(e) =>
                  setFormData({ ...formData, args_requested_end_date: e.target.value })
                }
              />
            </div>
          </div>
        </form>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleSubmit} disabled={!isValidEmail || loading}>Proceed</button>
      </section>
    </div>
  );
};

export default Request;
