import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Payment.css'
import { Table } from 'antd'
import { useState } from 'react'

function Payment() {

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
  /*
  const addNewRow = (newRow) => {
    
    setDataSource([...dataSource, newRow]); 
  };

  const updateRow = (updatedRow) => {
    
    const updatedDataSource = dataSource.map((row) => {
      if (row.id === updatedRow.id) {
        
        return { ...row, ...updatedRow };
      }
      return row;
    });
    setDataSource(updatedDataSource);
  };  */

  

  return (
    <div className='payment-top'>
      
      <div className='when'>
        <select style={{border:'1px solid rgb(0,0,0,0)', }} name='monthly'>
          <option value='monthly'>Monthly</option>
          <option value='termly'>Termly</option>
        </select>
        </div>
        <div className='search-pay-page'>
          <input type='search' name='search' placeholder='Search' /> <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      
      <div className='table-pay'>
      <Table  className='payment-table' columns={columns} style={{width:'100%', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'70vh', background:'white', marginTop:'25px',  }} dataSource={dataSource} pagination={false}  
      />
      </div>
    </div>
  )
}

export default Payment
