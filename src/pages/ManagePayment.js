import React from 'react';
import { Table, Select } from 'antd';
import './ManagePayment.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function ManagePayment() {
const columns = [
  {
    key:'1',
    title: 'ID',
    dataIndex: 'id',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    }
  },
  {
    key:'2',
    title: 'First Name',
    dataIndex: 'firstname',
    sorter: {
      compare: (a,b) => a.math -b.math, 
      multiple:2,
    },
  },
  {
    key:'3',
    title: 'Middle Name ',
    dataIndex: 'middlename',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    key:'4',
    title: 'Last Name',
    dataIndex: 'lastname',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key:'5',
    title: 'Grade ',
    dataIndex: 'grade',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key:'6',
    title: 'Sec. ',
    dataIndex: 'sec',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    key:'7',
    title: 'Sept ',
    dataIndex: 'sept',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
    
  },
  {
    key:'8',
    title: 'Oct ',
    dataIndex: 'oct',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
   
  },
  {
    key:'9',
    title: 'Nov ',
    dataIndex: 'nov',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
   
  },
  {
    key:'10',
    title: 'Dec ',
    dataIndex: 'dec',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
   
  },
  {
    key:'11',
    title: 'Jan ',
    dataIndex: 'jan',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
  {
    key:'12',
    title: 'Feb ',
    dataIndex: 'feb',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
   
  },
  {
    key:'13',
    title: 'Mar ',
    dataIndex: 'mar',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
  {
    key:'14',
    title: 'Apr ',
    dataIndex: 'apr',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
  {
    key:'15',
    title: 'Jun ',
    dataIndex: 'jun',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
  {
    key:'16',
    title: 'Jul ',
    dataIndex: 'jul',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
  {
    key:'17',
    title: 'Aug ',
    dataIndex: 'aug',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesomeIcon style={{ color: '#50F576', fontSize:'large' }} icon={faCheck} />
      </div>
    ),
  },
];
// eslint-disable-next-line no-unused-vars
const[dataSource, setDataSource] = useState([
  {
    id:'0001',
    firstname:'Abebe ',
    middlename:'Bekelle',
    lastname:'Chala',
    grade: 1,
    sec: 'A',
    
    
  },
  
]);

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};




  return (
    <div className='manage-payment'>
      <div>
        <h2 className='manage-payment-h2'>Manage Payment</h2>
      </div>
      
      <div className='pay-reason'>
        <span style={{marginRight:'15px', fontSize:'large'}}>Payment Reason</span>
        <select style={{marginRight:'30px'}}>
          <option value='monthly'>Monthly</option>
          <option value='tutorial'>Tutorial</option>
          <option value='form'>Form</option>
          <option value='workbook'>Work Book</option>
          <option value='tent'>Tent</option>
        </select>
        
        <select>
          <option value='firstterm'>First Term</option>
          <option value='secondterm'>Second Term</option>
          <option value='thirdterm'>Third Term</option>
          <option value='fourthterm'>Fourth Term</option>
          </select>
            <button className='btn-payment btn1' type='button'>Export Unpaid List</button>
            <button className='btn-payment' type='button'>Export Paid List</button>
            <button className='btn-payment' type='button'>Export Remaining List</button>
            </div>
            <div className='entry-payment'>
        <Select className='entries-manage' defaultValue="50" onChange={handleChange}>
          <Option value="50">50</Option>
          <Option value="20">20</Option>
          <Option value="10">10</Option>
          <Option value="30">30</Option>
        </Select>
        <label style={{marginTop:'5px'}} >Entries per page</label>
        <div className='search-pay'>
          <input type='search' name='search' placeholder='Search' />
          <FontAwesomeIcon  icon={faMagnifyingGlass} />
        </div>
      
        
      </div>
      <Table style={{marginLeft:'80px', height:'60vh', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)'}} className='manage-paying' columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
}

export default ManagePayment;
