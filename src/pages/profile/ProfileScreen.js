import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/Common/PageTitle'
import QuickEditCompany from '../../components/Dashboard/QuickEditCompany'
import { getCompanyData } from "../../store/companySlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { TfiBag } from 'react-icons/tfi';
import { getAllClientsSelector } from '../../store/clientSlice'

export default function ProfileScreen() {
  const company = useSelector(getCompanyData);
  const [companyData, setCompanyData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (company)
      setCompanyData(company);
  }, [company])

  const allClients = useSelector(getAllClientsSelector);

  // console.log(companyData);

  return (
    <div>
      <div className="p-4">
        <PageTitle title="Profile" />
      </div>

      <div className='w-full flex flex-wrap'>
        {/* for the main profile page  */}
        <div className="w-full lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-2 flex flex-col items-center ">

          <div className="w-40 h-40 border-2 rounded-2xl bg-white">
            <img src={companyData.image} alt="" className='w-full h-full rounded-2xl' />
          </div>

          <h1 className="my-5 text-3xl font-bold">{company ? companyData.companyName : 'Company Name'}</h1>

          <Link to={`mailto:${companyData.companyEmail}`}><button className='rounded bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white flex items-center gap-2'> <FiMail /> Contact for work</button></Link>

          {/* <h3 className='mt-10 text-lg'>Company based in {companyData.billingAddress}</h3> */}

          <div className="bg-blue-100 py-4 w-full rounded m-5 flex flex-col justify-center items-center hover:cursor-pointer"
          onClick={()=>navigate('/clients')}>
            <p className='text-4xl'>{allClients.length}</p>
            <p className='flex items-center mt-2'><TfiBag className='text-red-800 mr-2'/> Clients</p>
          </div>  


          <div className="p-2">
            <p className="text-3xl my-6 font-bold"> About {companyData.companyName}</p>
            <p className=''> <span className='font-bold '>Address: </span>{companyData.billingAddress}</p>
            <p className=''> <span className='font-bold '>Contact No.: </span>{companyData.companyMobile}</p>
          </div>

        </div>

        {/* for quick edit section  */}
        <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <QuickEditCompany isShowDetail={false} />
        </div>
      </div>
    </div>
  )
}
