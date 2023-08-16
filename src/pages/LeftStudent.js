import React from 'react';
import { Table,  Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSort, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import "./LeftStudent.css"
import { useState } from 'react';

function LeftStudent() {
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};



const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    sorter: {
      compare: (a, b) => a.firstname.localeCompare(b.firstname),
      multiple: 1,
      icon: (sortOrder) => {
        if (sortOrder === 'ascend') {
          return <FontAwesomeIcon icon={faSortAlphaDown} />;
        } else if (sortOrder === 'descend') {
          return <FontAwesomeIcon icon={faSortAlphaUp} />;
        }
        return <FontAwesomeIcon icon={faSort} />;
      },
    },
  },
  {
    title: 'Middle Name',
    dataIndex: 'middlename',
    sorter: {
      compare: (a, b) => a.middlename.localeCompare(b.middlename),
      multiple: 2,
      icon: (sortOrder) => {
        if (sortOrder === 'ascend') {
          return <FontAwesomeIcon icon={faSortAlphaDown} />;
        } else if (sortOrder === 'descend') {
          return <FontAwesomeIcon icon={faSortAlphaUp} />;
        }
        return <FontAwesomeIcon icon={faSort} />;
      },
    },
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    sorter: {
      compare: (a, b) => a.lastname.localeCompare(b.lastname),
      multiple: 3,
      icon: (sortOrder) => {
        if (sortOrder === 'ascend') {
          return <FontAwesomeIcon icon={faSortAlphaDown} />;
        } else if (sortOrder === 'descend') {
          return <FontAwesomeIcon icon={faSortAlphaUp} />;
        }
        return <FontAwesomeIcon icon={faSort} />;
      },
    },
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    sorter: {
      compare: (a, b) => a.grade.localeCompare(b.grade),
      multiple: 4,
      icon: (sortOrder) => {
        if (sortOrder === 'ascend') {
          return <FontAwesomeIcon icon={faSortAlphaDown} />;
        } else if (sortOrder === 'descend') {
          return <FontAwesomeIcon icon={faSortAlphaUp} />;
        }
        return <FontAwesomeIcon icon={faSort} />;
      },
    },
  },
 

  {
    title: 'MSept ',
    dataIndex: 'msept',
   
   
      
  },
  {
    title: 'MOct ',
    dataIndex: 'moct',
    
    
  },
  {
    title: 'MNov ',
    dataIndex: 'mnov',
    
    
  },
  {
    title: 'MDec ',
    dataIndex: 'mdec',
    
   
  },
  {
    title: 'MJan ',
    dataIndex: 'mjan',
   
   
  },
  {
    title: 'MFeb ',
    dataIndex: 'mfeb',
   
    
  },
  {
    title: 'MMar ',
    dataIndex: 'mmar',
   
    
  },
  {
    title: 'MApr ',
    dataIndex: 'mapr',
    
   
  },
  {
    title: 'MMay ',
    dataIndex: 'mmay',
    
    
  },
  {
    title: 'MJun ',
    dataIndex: 'mjun',
    
   
  },
  
];
// eslint-disable-next-line no-unused-vars
const[dataSource, setDataSource] = useState([
  {
    firstname:' ',
    middlename:'',
    lastname:'',
    grade:'' ,
    sec: '',
   
   
    
  },
  
]);

const pagination = {
  pageSizeOptions: ['10', '20', '30', '40', '50'],
  showSizeChanger: true,
  showQuickJumper: true,
  defaultPageSize: 10, 
  total: dataSource.length, 
};

  return (
    <div className='left-student'>
      <h1 className='left-h1'>Left Student</h1>

      <div className='header-container'>
        <Select className='entries-left' defaultValue="50" onChange={handleChange}>
          <Option value="50">50</Option>
          <Option value="20">20</Option>
          <Option value="10">10</Option>
          <Option value="30">30</Option>
        </Select>
        <label  >Entries per page</label>
        <div className='search-left'>
          <input type='search' name='search' placeholder='Search' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className='table-container'>
      <Table style={{marginLeft:'95px', boxShadow:' 0 0 10px rgba(0, 0, 0, 0.2)', height:'65vh', background:'white',width:'90vw'  }} className='table-left' columns={columns}  dataSource={dataSource} pagination={pagination}
          scroll={{ y: 'calc(70vh - 140px)' }} 
      />
      </div>
    </div>
  );
}

export default LeftStudent;