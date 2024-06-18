import React, { useState } from 'react';

const Register = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    args_student_number: '',
    args_student_section: '',
    args_student_department: '',
    args_student_year: '',
    args_student_email_address: '',
    args_student_firstname: '',
    args_student_surname: '',
    args_student_password: '',
    args_student_password2: ''
  });

  const [isValidEmail, setIsValidEmail] = useState(true); 
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/user/student/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to submit form: ${errorData.message}`);
      }

      window.location.reload();

    } catch (error) {
      alert(error.message);
      console.log(formData);
      console.log(error);
    }
  };

  if (!show) {
    return null;
  }

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Register</h2>
        <form className="two-column-form">
          <div className="form-column">
            <div>
              <label>First name</label>
              <input
                type="text"
                name="args_student_first"
                id="args_student_first"
                placeholder="Enter first name"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_firstname: e.target.value })
                }
              />
            </div>

            <div>
              <label>Last name</label>
              <input
                type="text"
                name="args_student_surname"
                id="args_student_surname"
                placeholder="Enter last name"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_surname: e.target.value })
                }
              />
            </div>

            <div>
              <label>Student Number</label>
              <input
                type="text"
                name="args_student_number"
                id="args_student_number"
                placeholder="Enter student number"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_number: e.target.value })
                }
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="args_student_password"
                id="args_student_password"
                placeholder="Enter Password"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-column">
            <div>
              <label>Department</label>
              <input
                type="text"
                name="args_student_department"
                id="args_student_department"
                placeholder="Enter department"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_department: e.target.value })
                }
              />
            </div>

            <div>
              <label>Year</label>
              <input
                type="text"
                name="args_student_year"
                id="args_student_year"
                placeholder="Enter year"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_year: e.target.value })
                }
              />
            </div>

            <div>
              <label>Section</label>
              <input
                type="text"
                name="args_student_section"
                id="args_student_section"
                placeholder="Enter section"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_section: e.target.value })
                }
              />
            </div>
            
            <div>
              <label>Re-enter Password</label>
              <input
                type="password"
                name="args_student_password2"
                id="args_student_password2"
                placeholder="Enter Password"
                onChange={(e) =>
                  setFormData({ ...formData, args_student_password2: e.target.value })
                }
              />
            </div>
            <div className='form-column' style={{ transform: 'translateX(-50%)' }}>
              <label>Email Address</label>
              <input
                type="email"
                name="args_student_email_address"
                id="args_student_email_address"
                placeholder="Enter email address"
                onChange={handleEmailChange}
                className={!isValidEmail ? 'invalid' : ''}
              />
              {!isValidEmail && <p className="error-message">Please enter a valid email address</p>}
            </div>
          </div>
        </form>
        <button type='button' onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Register;
