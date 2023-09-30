'use client'

import React, { useState } from 'react';

type Tab = {
  id: number;
  name: string;
  address: string;
  contact?: string;
};

const tabs: Tab[] = [
  {
    id: 1,
    name: 'MAI Labs HQ',
    address: '18 Forum Lane, Camana Bay, \n3rd Floor – Suite 5304 \nP.O. Box 31230, \nGrand Cayman, KY1-1205',
  },
  {
    id: 2,
    name: 'USA',
    address: '1007 N Orange St.4th Floor \nSte 1382, Wilmington',
  },
  {
    id: 3,
    name: 'Dubai',
    address: 'Unit No: 2307, DMCC \nBusiness Centre, Level No 1, \nJewellery & Gemplex 3, \nDubai, United Arab Emirates',
  },
  {
    id: 4,
    name: 'Mauritius',
    address: 'Suite 308, St James Court, \nSt Denis Street, Port Louis, \nRepublic of Mauritius',
  },
  {
    id: 5,
    name: 'Indian HQ',
    address: 'FC 19 & 20 FILM CITY, \nSECTOR-16A, Noida, \nGautam buddha Nagar, \nUttar Pradesh, 201301',
    contact: '0120-2223445',
  },
  {
    id: 6,
    name: 'R&D Center',
    address: 'Mahaveer Water Mark Building, \n13th Floor, Plot No. 11, \nSurvey No.9, \nNear CII Building Lane, \nKondapur, Hyderabad - 500084'
  }
];

const VerticalTabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const onTabChange = (tab: number) => () => {
    setSelectedTab(tab);
  };

  const selectedTabDetails = tabs.find(tab => tab.id === selectedTab);

  return (
    <div className="vertical-tabs">
      <div className="sidebar">
        <div className="tab-heading">Our Offices</div>
        <div className="tabs">
          {
            tabs.map(tab => (
              <div
                className={`tab ${selectedTab === tab.id ? 'selected' : ''}`}
                key={tab.id}
                onClick={onTabChange(tab.id)}
              >
                <div className="name">
                  {tab.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="view">
        <div className="tab-heading">Address</div>
        <p className="address">{selectedTabDetails?.address || ''}</p>
        {selectedTabDetails?.contact && (
          <>
            <div className="tab-heading">Contact</div>
            <p className="address">{selectedTabDetails.contact}</p>
          </>
        )}
      </div>
    </div>
  )
};

export default VerticalTabs;
