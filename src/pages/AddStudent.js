import React from 'react'
import "./AddStudent.css"
import { Select } from 'antd';

function AddStudent() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const formRef = React.createRef();

  const handleReset = () => {
    // Reset form fields
    formRef.current.reset();
  };
  return (
    <>
    <div className='add-student-page'>
      <h1 className='add-h1'>ADD STUDENT</h1>

      <form className='addstudent-form' ref={formRef}> 
       <div className='form-row'>
        <label className='label-add'>Reg ID:</label>
        <input className='input-field' type="text" name="reg id"></input>
        </div>
        <div className='form-row'>
        <label className='label-add'>First Name:</label>
        <input className='input-field' type="text" name="firstname"></input>
        </div>
        <div className='form-row'>
        <label className='label-add'>Middle Name: </label>
        <input className='input-field' type="text" name="middlename"></input>
        </div>
        <div className='form-row'>
        <label className='label-add'>Last Name: </label>
        <input className='input-field' type="text" name="lastname"></input></div>
        <div className='form-row'>
        <label className='label-add'>Grade:</label>
        <input className='input-field' type="number" name="grade"></input>
        </div>
        <div className='form-row'>
        <label className='label-add'>Sec.: </label>
        <input className='input-field' type="text" name="section "></input>
        </div>
        <div className='form-row'>
        <label className='label-add'>Payment Type: </label>
          <Select  className='select-field' defaultValue="registration + sept."   onChange={handleChange}
              options={[
                {
                  value: 'registration + sept.',
                  label: 'Registration + Sept.',
                },
                {
                  value: 'monthly',
                  label: 'Monthly',
                },
                {
                  value: 'termly',
                  label: 'Termly',
                },
                {
                  value: 'halfpay',
                  label: 'Half Pay',
                  
                },
                {
                  value: 'staff + registration',
                  label: 'Staff + Registration',
                  
                },
                {
                  value: 'staff without reg',
                  label: 'Staff Without Reg.',
                  
                },
                {
                  value: 'fullsponser',
                  label: 'Full Sponser',
                  
                },
                {
                  value: 'registrationonly',
                  label: 'Registration Only',
                  
                },
                {
                  value: 'moc',
                  label: 'MOC',
                  
                },
              ]}
            />
        </div>
        <div className='form-row'>
       <label className='label-add'>Reset: </label>
          <button className='reset-add' type='button' onClick={handleReset}>
            Reset
          </button>
          </div>
          <div className='form-row'>
        <button className='addstud-button' type='submit'>ADD</button>
        </div>
        
      </form>
    </div>
    </>
  )
}

export default AddStudent
