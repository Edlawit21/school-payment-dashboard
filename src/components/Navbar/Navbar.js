import React from 'react'
import { Menu, Select } from 'antd';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faFileExport } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

      const handleExportStudents = () => {
        
        
      };
      
      const handleExportPayments = () => {
       
        
      };
      

  return (
    <div className='navbar'>
        <Menu mode='horizontal' style={{backgroundColor:'#E6E6F0', marginLeft:'90px', gap:'6px', height:'7vh', alignItems:'center'}}>
            <Menu.SubMenu title="Student" key="student">
                <Menu.Item key="add-student">
                    <Link to ="/add-student">Add Student</Link>
                </Menu.Item>
                <Menu.Item key="left-student">
                    <Link to ="/left-student">Left Student</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Recepit" key="recepit">
                <Menu.Item key="prepare-recepit">
                <Link to="/prepare-recepit">Prepare Recepit</Link>

                </Menu.Item>
                <Menu.Item key="manage-reason">
                    <Link to ="/manage-reason">Manage Reason</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Report" key="report">
                <Menu.Item key="void-report">
                    <Link to ="/void-report">Void Report</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Payment" key="payment">
                <Menu.Item key="manage-payment">
                    <Link to ="/manage-payment">Manage Payment</Link>
                </Menu.Item>       
            </Menu.SubMenu>
            <Menu.SubMenu title="Export" key="export">
  <Menu.SubMenu key="export-student" title="Export Students">
    <div style={{ height: '8rem', width: '15rem' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <span>Export Students</span>
      </div>
      <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
        <label style={{ color: 'gray' }}>Grade</label>
        <select style={{ border: 'none', cursor:'pointer' }}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', paddingLeft: '14px' }}>
        <FontAwesomeIcon style={{ color: 'grey', fontSize: 'large', paddingRight: '5px' }} icon={faSquare} /> Left Students
      </div>
      <div style={{ color: 'white', padding: '0 14px', marginTop: '16px' }}>
      <button
  style={{ width: '100%', height: '32px', color: 'white', backgroundColor: '#321a62', borderRadius: '6px', cursor:'pointer' }}
  type='button'
  onClick={handleExportStudents}
>
  <FontAwesomeIcon icon={faFileExport} /> EXPORT
</button>

      </div>
    </div>
  </Menu.SubMenu>

  <Menu.SubMenu title="Export Payment" key="export-payment">
    <div style={{ height: '13rem', width: '16rem' }}>
      <div style={{ textAlign: 'center', marginTop: '20px', marginBottom:'25px' }}>
        <span>Export Payments</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'20px', padding:'0 14px' }}>
        <label style={{color:'grey'}}>Payment Type</label>
        <select style={{border:'none', cursor:'pointer'}}>
          <option value='monthly'>Monthly</option>
          <option value='termly'>Termly</option>
          <option value='form'>Form</option>
          <option value='workbook'>WorkBook</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'30px', padding:'0 14px' }}>
        <label style={{color:'grey'}}>Payment Status</label>
        <select style={{border:'none', cursor:'pointer'}}>
          <option value='overdue'>Overdue</option>
          <option value='paid'>Paid</option>
          <option value='remaining'>Remaining</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:'30px', padding:'0 14px '}}>
        <label style={{color:'grey'}}>Grade</label>
        <select style={{ border: 'none', cursor:'pointer' }}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
        </select>
      </div>
      <div style={{ color: 'white', padding: '0 14px', marginTop: '25px' }}>
      <button
  style={{ width: '100%', height: '32px', color: 'white', backgroundColor: '#321a62', borderRadius: '6px', cursor:'pointer' }}
  type='button'
  onClick={handleExportPayments}
>
  <FontAwesomeIcon icon={faFileExport} /> EXPORT
</button>

      </div>
    </div>
  </Menu.SubMenu>
</Menu.SubMenu>

<Menu.SubMenu>
            <Menu.Item key="select" >
            <Select   className='select-nav'
            style={{ marginLeft: '30rem' }} defaultValue="2021"   onChange={handleChange}
              options={[
                {
                  value: '2021',
                  label:'2021' ,            
                },
                {
                  value: '2022',
                  label: '2022',
                },
                {
                  value: '2023',
                  label: '2023',
                },
                {
                  value: '2024',
                  label: '2024 ',
                  
                },
                {
                  value: '2025 ',
                  label: '2025 ',
                  
                },
                
              ]}
            />
            </Menu.Item>
            </Menu.SubMenu>
        </Menu>
        
       
      
    </div>
  )
}

export default Navbar
