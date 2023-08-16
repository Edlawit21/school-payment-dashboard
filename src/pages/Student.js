import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faToggleOff, faUserPlus, faPenToSquare, faCircleInfo, faTrash, faReceipt } from '@fortawesome/free-solid-svg-icons'
import "./Student.css"
import { Modal, Table, Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Student() {

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
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      key:'3',
      title: 'Middle Name',
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
      title: 'Remaining ',
      dataIndex: 'remaining',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'8',
      title: 'Payment ',
      dataIndex: 'payment',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'9',
      title: ' ',
      render: (record) => {
        return (
          <>
           <div >
           <Link to="/info-icon"> 
                <FontAwesomeIcon style={{ color: 'blue', paddingRight:'8px' }} icon={faCircleInfo} />
              </Link>
            <FontAwesomeIcon style={{color:'orange'}}  onClick={() => {
              onEditStudent(record);
            }} icon={faPenToSquare} />
            <FontAwesomeIcon  style={{color:'red'}}  onClick={() => {
              onDeleteStudent(record);
            }} icon={faTrash} />
            <FontAwesomeIcon style={{ color: 'green' }} icon={faReceipt} />
            </div>
          </>
        )
      }
      
    },
  ];
  
  const [isEditing, setIsEditing] = useState( false);
  const [editingStudent, setEditingStudent] = useState(null);
  const[dataSource, setDataSource] = useState([
    {
      id:'0001',
      firstname: 'Abebe ',
      middlename: 'Bekelle',
      lastname: 'Chala',
      grade: 1,
      sec: 'A',
      remaining:'$ 0.00',
      payment:'Monthly',
      
    },
    
  ]);
  
  
  

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title:'Are you sure you want to delete this student record?',
      okText:'Yes',
      okType:'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        })
      }
    })
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div className='student-page'>
      <div className='top-stud'>
        <button className='add-btn'> <Link to="/add-student" style={{ textDecoration: 'none', color: 'inherit' }}>
    <FontAwesomeIcon icon={faUserPlus} />Add Student
  </Link>
        </button>
        <div className='toggle-off'><FontAwesomeIcon icon={faToggleOff} size='2x'/>Global Search
        </div>
        <div className='search-stud'>
          <input type='search' name='search' placeholder='Search' /><FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className='card-table'>
        <div className='table-part'>
          <Table className='custom-table' style={{width:'70vw', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'70vh', background:'white', marginTop:'10px', marginLeft:'100px'}} columns={columns} dataSource={dataSource} pagination={false} />
          <Modal
        title="Edit Student"
        open={isEditing}
        okText="Save"
        onCancel={() => resetEditing()}
        onOk={() => {
          setDataSource((prevDataSource) => {
            return prevDataSource.map((student) => {
              if (student.id === editingStudent.id) {
                return { ...student, ...editingStudent };
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.firstname}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, firstname: e.target.value }))
          }
        />
        <Input
          value={editingStudent?.middlename}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, middlename: e.target.value }))
          }
        />
        <Input
          value={editingStudent?.lastname}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, lastname: e.target.value }))
          }
        />
          
          <Input
          value={editingStudent?.grade}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, grade: e.target.value }))
          }
        />
         <Input
          value={editingStudent?.sec}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, sec: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.remaining}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, remaining: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.payment}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, payment: e.target.value }))
          }
        />
        </Modal>
        </div>
        <div className='card-h3'>
          <div style={{marginBottom:'5px'}}>
            <h3>NUMBER OF STUDENTS</h3>
          </div>
          <div className='card-stud'>
           <div style={{height:'50px', marginLeft:'25px',  border: '1px solid rgba(0, 0, 0, 0)',  boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', width:'35px', borderRadius:'8px' }}>
              <div >
                <span style={{fontSize:'20px',  paddingLeft:'8px'}}>A</span>
                </div>
              <div style={{backgroundColor:'#313a46', color:'white', textAlign:'center', borderRadius:'8px', padding:'7px' }}>
                <span style={{fontSize:'large'}}>00</span>
              </div>
            </div>
            <div style={{height:'50px', marginLeft:'4px', border:'1px solid rgba(0, 0, 0, 0)', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', borderRadius:'8px', width:'35px', }}>
        <div>
        <span style={{fontSize:'20px',  paddingLeft:'8px'}}>B</span>
        </div>
        <div style={{backgroundColor:'#313a46', color:'white', textAlign:'center', borderRadius:'8px',padding:"7px"  }}>
        <span style={{fontSize:'large'}}>00</span>
        </div>
      </div>
      <div style={{height:'50px', marginLeft:'4px', border:'1px solid rgba(0, 0, 0, 0)', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', borderRadius:'8px', width:'35px'}}>
        <div>
        <span style={{fontSize:'20px',  paddingLeft:'8px'}}>C</span>
        </div>
        <div style={{backgroundColor:'#313a46', color:'white', textAlign:'center', borderRadius:'8px',padding:"7px"  }}>
        <span style={{fontSize:'large'}}>00</span>
        </div>
      </div>
      <div style={{height:'50px', marginLeft:'4px', border:'1px solid rgba(0, 0, 0, 0)', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', borderRadius:'8px', width:'35px'}}>
        <div>
        <span style={{fontSize:'20px',  paddingLeft:'8px'}}>D</span>
        </div>
        <div style={{backgroundColor:'#313a46', color:'white', textAlign:'center', borderRadius:'8px',padding:"7px"  }}>
        <span style={{fontSize:'large'}}>00</span>
        </div>
      </div>
      <div style={{height:'50px', marginLeft:'4px', border:'1px solid rgba(0, 0, 0, 0)',boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', borderRadius:'8px', width:'75px' }}>
        <div style={{marginTop:'1px'}}>
        <span style={{fontSize:'17px',  padding:'8px', }}>TOTAL</span>
        </div>
        <div style={{backgroundColor:'#313a46', color:'white', textAlign:'center', borderRadius:'8px',padding:"6px", marginTop:'2px'  }}>
        <span style={{fontSize:'larger'}}>000</span>
        </div>
      </div>
      </div>

        <div className='status'>
        <div style={{marginLeft:'25px', marginTop:'20px'}}>
        <span style={{fontSize:'small', color:'grey'}}>PAYMENT STATUS</span>
        </div>
        <div style={{marginLeft:'25px', border:'1px solid rgba(0, 0, 0, 0)', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)',marginTop:'4px', borderRadius:'8px' }}>
          <label style={{paddingLeft:'10px', paddingTop:'5px', fontSize:'smaller', color:'grey'}}>Payment</label>
          <select style={{marginLeft:'72px', marginBottom:'10px', border:'1px solid rgba(0, 0, 0, 0)'}} name='payment'>
            <option value='termly'>Termly</option>
            <option value='monthly'>Monthly</option>
          </select>
          <br/>
          <select style={{marginLeft:'128px', border:'1px solid rgba(0, 0, 0, 0)', width:'90px', }} name='payment'>
            <option style={{fontSize:'samller'}} value='firstterm'>First Term</option>
            <option value='secondterm'>Second Term</option>
            <option value='secondterm'>First Month</option>
            <option value='secondterm'>Second Month</option>
          </select>
          <div style={{height:'60px'}} className='colored'>
            <div style={{ textAlign:'center', width:'4.5rem', color:'white',backgroundColor:'#50F576', fontSize:'smaller', paddingTop:'10px',display:'flex', flexDirection:'column' }} >
            <span  className='green'>00 </span>
            <span className='green2'>Paid</span>
            </div>
            <div style={{textAlign:'center', width:'8.5rem', color:'white', backgroundColor:'#F55050', fontSize:'smaller', paddingTop:'10px',display:'flex', flexDirection:'column'}}>
            <span className='red'>00</span>
            <span className='red2'>Overdue</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Student
