// import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { db } from '../../../fireBase/fireBase'
// import { useSelector } from 'react-redux'
// import Button from '../Button'
// import {useNavigate} from 'react-router-dom'
// import Lottie from 'lottie-react'
// import Animation from '../../assets/newAnimation.json'

// function Invoices() {
//   const authStatus = useSelector((state)=>state.auth.userData)
//   const [invoices , setInvoices] = useState([])
//   const [isLoading,setLoading] = useState(false)
//   const navigate = useNavigate()

//   useEffect(()=>{
//     getData()
//   },[])


//   const getData = async ()=>{
//     setLoading(true)
//     const queryData = query(collection(db,"invoices"),where('userId', '==', authStatus.uid))
//     const getData = await getDocs(queryData) 
//     const data =getData.docs.map(doc =>({
//       id:doc.id,
//       ...doc.data()
//     }))
//     // console.log(data);
//     setInvoices(data)
//     setLoading(false)
//   }
//   // console.log(invoices);

//   const deleteInvoice = async (id) => {
//   const isSure = window.confirm("Are you sure you want to delete?");
//   if (isSure) {
//     try {
//       await deleteDoc(doc(db, "invoices", id));
//       getData(); // refresh invoice list
//     } catch (error) {
//       window.alert("Something went wrong");
//       console.error("Delete error:", error);
//     }
//   }
// };

// console.log(navigate);

  
  
//   return (
//    <> 

//     {isLoading? <div className='ml-60'>
      
//        <div className='flex justify-center items-center md:h-[500px] md:w-[700px] mt-10'>
//                       <Lottie animationData={Animation} classID='w-[500px]'/>
//                     </div>
//     </div> : 
//         <div className='flex justify-center items-center flex-col'>
//              {invoices?.map((invoice,index)=>{
//         return(
//         <div className="invoice bg-[#1e1e1e] w-[90%] rounded-md p-3 h-[60px] mb-3 flex justify-between items-center" key={index}>
//             <p className='bg-[#1e1e1e] font-bold text-[#00d8d8]'>{invoice.CustomerName}</p>
//             <p className='bg-[#1e1e1e]'>{new Date(invoice.date.seconds * 1000).toLocaleDateString()}</p>
//             <p className='bg-[#1e1e1e]'>Total : {invoice.total}</p>
//             <Button childrenText="View Invoice " onClick={()=> {navigate('/dashboard/invoice-details',{state:invoice} )}} className='' />
//             <Button childrenText="Delete" onClick={()=>deleteInvoice(invoice.id)} className='bg-red-800  border-red-700' />
//           </div>
//         )
//       })}

//       {invoices.length < 1 && <div className='mt-60'>
//         <p className='font-semibold text-2xl'>NO INVOICE ! <span className='underline'>Create New Invoice</span></p>
//         <Button  childrenText="Create Invoice" className='ml-20 mt-6 w-60' onClick={()=>navigate('/dashboard/new-invoice')}/>
//       </div>  
//       }
//         </div>
    
//     }
//    </>
//   )
// }

// export default Invoices





import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../fireBase/fireBase'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import Animation from '../../assets/newAnimation.json'

function Invoices() {
  const authStatus = useSelector((state) => state.auth.userData)
  const [invoices, setInvoices] = useState([])
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    const queryData = query(collection(db, "invoices"), where('userId', '==', authStatus.uid))
    const getData = await getDocs(queryData)
    const data = getData.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setInvoices(data)
    setLoading(false)
  }

  const deleteInvoice = async (id) => {
    const isSure = window.confirm("Are you sure you want to delete?");
    if (isSure) {
      try {
        await deleteDoc(doc(db, "invoices", id));
        getData(); // refresh invoice list
      } catch (error) {
        window.alert("Something went wrong");
        console.error("Delete error:", error);
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[80vh]'>
          <Lottie animationData={Animation} className='w-[300px] sm:w-[400px] md:w-[600px]' />
        </div>
      ) : (
        <div className='flex flex-col items-center justify-start px-4 w-full'>
          {/* Invoice List */}
          {invoices?.map((invoice, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] w-full sm:w-[90%]  rounded-md p-4 mb-4 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 text-white"
            >
              <p className='text-[#00d8d8] bg-[#1e1e1e] text-center  font-semibold'>{invoice.CustomerName}</p>
              <p className='bg-[#1e1e1e] text-center ' >{new Date(invoice.date.seconds * 1000).toLocaleDateString()}</p>
              <p className='bg-[#1e1e1e] text-center ' >Total: {invoice.total}</p>

              <div className="flex flex-col sm:flex-row gap-2 mt-2 lg:mt-0 bg-[#1e1e1e]">
                <Button
                  childrenText="View Invoice" 
                  onClick={() => { navigate('/dashboard/invoice-details', { state: invoice }) }}
                />
                <Button
                  childrenText="Delete"
                  onClick={() => deleteInvoice(invoice.id)}
                  className='bg-red-800 border-red-700'
                />
              </div>
            </div>
          ))}

          {/* No Invoices Message */}
          {invoices.length < 1 && (
            <div className='mt-24 text-center'>
              <p className='font-semibold text-2xl text-white'>NO INVOICE! <span className='underline'>Create New Invoice</span></p>
              <Button
                childrenText="Create Invoice"
                className='mt-6 w-full sm:w-60'
                onClick={() => navigate('/dashboard/new-invoice')}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Invoices
