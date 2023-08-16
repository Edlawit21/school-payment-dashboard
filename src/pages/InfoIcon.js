import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faTrash,faPenToSquare, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Table, Input, Modal } from 'antd'
import { useState } from 'react'
import "./InfoIcon.css"

function InfoIcon() {

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
                
                <FontAwesomeIcon style={{color:'orange'}}  onClick={() => {
                  onEditStudent(record);
                }} icon={faPenToSquare} />
                <FontAwesomeIcon  style={{color:'red'}}  onClick={() => {
                  onDeleteStudent(record);
                }} icon={faTrash} />
                <FontAwesomeIcon style={{ color: 'green' }} icon={faPrint} />
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
    <div>
      <div className='info-top'>
        <FontAwesomeIcon size='2x' color='#313A46' style={{marginLeft:'100px'}}  icon={faUserCircle}/>
        <div className='first-info'>
          <span>FULL NAME</span>
          <span className='second-info'>FIRST MIDDLE NAME</span>
          </div>
          <div className='first-info'>
          <span>GRADE</span>
          <span className='second-info'> 1A</span>
          </div>
        
        <div className='first-info'>
            <span>REMAINING</span>
            <span className='second-info'>$ 0.00</span>
            </div>
            <div className='first-info'>
            <span>TOTAL PAID</span>
            <span className='second-info'>$ 0.00</span>
            </div>
            <span className='second-info paymenth'>PAYMENT HISTORY</span>  
      </div>
      <div className='table-report'>
      <Table  className='report-table' columns={columns} style={{ boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'50vh', background:'white', marginTop:'-10px', width:'90vw', marginLeft:'100px' }} dataSource={dataSource} pagination={false}  
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
  )
}

export default InfoIcon
