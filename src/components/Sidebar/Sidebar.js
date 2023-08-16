import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faList, faReceipt, faPrint, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  const sidebarItems = [
    { path: '/', label: 'Username', icon: faCircleUser },
    { path: '/students', label: 'Students', icon: faList },
    { path: '/recepits', label: 'Recepits', icon: faReceipt },
    { path: '/report', label: 'Report', icon: faPrint },
    { path: '/payments', label: 'Payments', icon: faMoneyBill },
  ];

  return (
    <div className="sidebar">
      <ul className="list">
        {sidebarItems.map((item) => (
          <li className="item" key={item.path}>
            <div className={`row ${selectedItem === item.path ? 'selected' : ''}`}>
              <Link to={item.path} className="username">
                <span className="icon">
                  {[<FontAwesomeIcon key={item.label} icon={item.icon} size='2x' />]}
                </span>
                <span className="user">{item.label}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
