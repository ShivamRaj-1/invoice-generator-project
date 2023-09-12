import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/Common/PageTitle'
import QuickEditCompany from '../../components/Dashboard/QuickEditCompany'
import { getCompanyData } from "../../store/companySlice";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const company = useSelector(getCompanyData);
  const [companyData, setCompanyData] = useState({})

  useEffect(() => {
    if(company)
      setCompanyData(company);
  },[company])
  
  console.log(companyData);

  return (
    <div>
      <div className="p-4">
        <PageTitle title="Profile" />
      </div>

      <div className='w-full flex flex-wrap'>
        {/* for the main profile page  */}
        <div className="w-full lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-2 flex flex-col items-center ">
          
          <div className="w-40 h-40 border-2 rounded-2xl bg-white">
            <img src={companyData.image} alt="" className='w-full h-full rounded-2xl'/>
          </div>

          <h1 className="my-5 text-3xl font-bold">{company ? companyData.companyName : 'Company Name'}</h1>

        </div>

        {/* for quick edit section  */}
        <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <QuickEditCompany isShowDetail={false} />
        </div>
      </div>
    </div>
  )
}
