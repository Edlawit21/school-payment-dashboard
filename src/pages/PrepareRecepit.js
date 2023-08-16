import React from 'react'
import './PrepareRecepit.css'

function PrepareRecepit() {
  return (
    <div className='drop-recepit'>
     <div className='head'>
    <h1>Receipt Voucher</h1>
    </div>
    <div className='top'>
      <label className='recepit-label'>Date:</label>
      <input type='date' name='date'/>
    </div>
    <div className='top'>
      <label className='recepit-label' >Serial N<sup>o</sup>:</label>
      <input type='number' name='serailno' className='serial-input'/>
    </div>
    <hr/>
    <div className='recepit-body'>
    <div>
      <label className='recepit-label' >From:</label>
      <input type='text' name='from' className='from'/>
    </div>
    <div className='sum-birr'>
      <label className='recepit-label'  >Sum of Birr:</label>
      <input type='text' name='sumofbirr' className='sum'/>
    <div>
      <label className='recepit-label' >Birr:</label>
      <input type='text' name='birr' className='birr'/>
    </div>
    </div>
    <div>
      <label className='recepit-label' >For:</label>
      <input type='text' name='for' className='for' />
      <div >
        <span className='mpay'>Monthly Payment:</span>
        <span className='mpay'>Tutorial Payment:</span>
      </div>
    </div>
      <div>
      <label className='recepit-label' >Grade:</label>
      <input type='number' name='grade' className='grader'/>
    </div>
    <div>
      <label className='recepit-label' >Reference:</label>
      <input type='text' name='reference' className='reference'/>
      <label className='recepit-label' >Remaining</label>
      < input type='radio' name='remaining' className='radio-recepit'/>
      <label className='recepit-label' >Extra</label>
      < input type='radio' name='extra' className='radio-recepit'/>
      <label className='recepit-label' >Paid off Remaining</label>
      < input type='radio' name='paidremaining' className='radio-recepit'/>
      <label className='recepit-label' >Paid off Extra</label>
      < input type='radio' name='payextra' className='radio-recepit'/>
    </div>
    </div>
    <div >
    <button type="button" className='butn' >SUBMIT</button>
    </div>
  </div>
  
  )
}

export default PrepareRecepit
