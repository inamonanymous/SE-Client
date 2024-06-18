import React, { useState } from 'react';

const LoginModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    args_student_number: '',
    args_student_password: ''
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/user/student/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        localStorage.removeItem('student_number');
        throw new Error(`Failed to submit form: ${errorData.error}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      window.location.href="/";
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('student_number', responseData.session);
    } catch (error) {
      alert(error.message);
      console.log(formData);
      console.log(error);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form className='two-column-form'>
          <div class="form-column">
            <label>
              Student I.D:
            </label>
              <input 
                type="text" 
                name="student_number"
                id='student_number'
                placeholder='Enter your Student I.D'
                onChange={(e) => setFormData({ ...formData, args_student_number: e.target.value })}
              />
            
          </div>
          <div class="form-column">
            <label>
              Password:
            </label>
              <input 
                type="password" 
                name="password" 
                placeholder='Enter your Password'
                onChange={(e) => setFormData({ ...formData, args_student_password: e.target.value })}
              />
            
          </div>
        </form>
        <button type='button' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
