import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faMagnifyingGlass,faCircleInfo, faReceipt, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./Recepit.css"
import { Table, Input, Modal } from 'antd';
import { useState } from 'react';

function Recepit() {
  
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
      title: 'Payer',
      dataIndex: 'payer',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      key:'3',
      title: 'Grade ',
      dataIndex: 'grade',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      key:'4',
      title: 'Sec.',
      dataIndex: 'sec',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'5',
      title: 'Remaining ',
      dataIndex: 'remaining',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'6',
      title: 'Date ',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'7',
      title: 'Serial ',
      dataIndex: 'serial',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'8',
      title: 'Amount ',
      dataIndex: 'amount',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'9',
      title: 'Reason ',
      dataIndex: 'reason',
      
        
      
      
    },
    {
      key:'10',
      title: 'Reference ',
      dataIndex: 'reference',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      key:'11',
      title: ' ',
      render: (record) => {
        return (
          <>
           <div >
            <FontAwesomeIcon style={{color:'blue'}} icon={faCircleInfo} />
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
      payer:'Abebe Bekelle Chala',
      grade: 1,
      sec: 'A',
      remaining:'$ 0.00',
      date:'0000-00-00',
      serial:'00000',
      amount:'$0000.00',
      reason:'lorem ipsum lorem ipusm lorem ipusm lorem ipusm',
      reference:'00000',
      
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
    <>
    <div className='report'>
      <div className='button-group'>
        <button className='all' >All Recepits</button>
        <button className='all'>Student Recepits</button>
        <button className='all'>Other Recepits</button>
      </div>
      <div className='off'><FontAwesomeIcon icon={faToggleOff} size='2x' /> Date
      </div>
      <div className='date'>00/00/0000</div>
      <div className='search-recepit-page'>
          <input type='search' name='search' placeholder='Search' /> <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className='table-report'>
      <Table  className='report-table' columns={columns} style={{ boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'70vh', background:'white', marginTop:'25px'  }} dataSource={dataSource} pagination={false}  
      />
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
          value={editingStudent?.payer}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, payer: e.target.value }))
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
          value={editingStudent?.date}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, date: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.serial}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, serial: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.amount}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, amount: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.reason}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, reason: e.target.value }))
          }
        />
          <Input
          value={editingStudent?.reference}
          onChange={(e) =>
            setEditingStudent((prev) => ({ ...prev, reference: e.target.value }))
          }
        />
        </Modal>
    </div>
    </div>
        
      
   
      </>
    
  );
};

export default Recepit;

