// import React, { useState } from "react";
// import Button from "../Button";
// import { useSelector } from "react-redux";
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import { db } from "../../../fireBase/fireBase";
// import { useNavigate } from "react-router-dom";

// function NewInvoice() {
//   const [CustomerName, setCustomerName] = useState("");
//   const [phoneNumber, setphoneNumber] = useState("");
//   const [address, setaddress] = useState("");
//   const [productName, setproductName] = useState("");
//   const [price, setprice] = useState("");
//   const [quantity, setquantity] = useState(1);
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const authStatus = useSelector((state)=>state.auth.userData)
//   const navigate = useNavigate()

//   const itemsHead = [
//     { name: "Sr.No" },
//     { name: "Product Name" },
//     { name: "Price" },
//     { name: "Quantity" },
//     { name: "Total" },
//   ];

//   const addProduct = (e) => {
//     e.preventDefault(); 

//     const numericPrice = parseFloat(price);
//     const numericQty = parseInt(quantity);

//     if (!productName || isNaN(numericPrice) || isNaN(numericQty)) {
//       alert("Please enter valid product, price, and quantity");
//       return;
//     }

//     const subTotal = numericPrice * numericQty;

//     setProducts([
//       {
//         id: products.length,
//         name: productName,
//         price: numericPrice,
//         qty: numericQty,
//       },
//       ...products,
//     ]);

//     setTotal((prev) => prev + subTotal);
//     setproductName("");
//     setquantity(1);
//     setprice("");
//   };

//   // console.log(authStatus.uid);
  


//   const saveData = async()=>{
//     const data = await addDoc(collection(db,'invoices'),{
//       CustomerName:CustomerName,
//       phoneNumber:phoneNumber,
//       products:products,
//       total:total,
//       address :address,
//       userId:authStatus.uid,
//       date:Timestamp.fromDate(new Date())
//     })
//     // console.log(data);
//     navigate('/dashboard/invoices')
    
//   }

//   return (
//     <>
//       <div>
//         <form>
//           <div className="first flex justify-evenly">
//             <input
//               type="text"
//               value={CustomerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               required
//               placeholder="Customer Name"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="number"
//               value={phoneNumber}
//               onChange={(e) => setphoneNumber(e.target.value)}
//               required
//               placeholder="Phone Number"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setaddress(e.target.value)}
//               required
//               placeholder="Address"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="second mt-4 flex justify-evenly">
//             <input
//               type="text"
//               value={productName}
//               onChange={(e) => setproductName(e.target.value)}
//               required
//               placeholder="Product Name"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setprice(e.target.value)}
//               required
//               placeholder="Price"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setquantity(e.target.value)}
//               required
//               placeholder="Quantity"
//               className="px-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <Button
//             childrenText="Add Product"
//             onClick={addProduct}
//             className="px-40 mt-5 ml-[34%]"
//           />
//         </form>
//       </div>

//       {products.length > 0 && (
//         <div className="flex justify-center items-center">
//           <div className="center bg-[#1e1e1e] w-[85%] mt-5 rounded-md p-3">
//             <div className="bg-[#1e1e1e] flex justify-center items-center">
//               {itemsHead.map((item, index) => (
//                 <p
//                   key={index}
//                   className="bg-[#1e1e1e] mx-20 font-bold underline text-[#00d8d8]"
//                 >
//                   {item.name}
//                 </p>
//               ))}
//             </div>
//             {products.map((product, index) => (
//               <div
//                 className="bg-[#1e1e1e] flex justify-center items-center mt-4"
//                 key={index}
//               >
//                 <p className="bg-[#1e1e1e] mx-24">{index + 1}</p>
//                 <p className="bg-[#1e1e1e] mx-24">{product.name}</p>
//                 <p className="bg-[#1e1e1e] mx-24">{product.price}</p>
//                 <p className="bg-[#1e1e1e] mx-24">{product.qty}</p>
//                 <p className="bg-[#1e1e1e] mx-24">
//                   {product.price * product.qty}
//                 </p>
//               </div>
//             ))}
//             <div className="bg-[#00d8d8] rounded-full p-1 text-center mt-5 font-semibold text-black">
//               Total Amount:{" "}
//               <span className="font-bold bg-[#00d8d8]">{total}</span>
//             </div>
//           </div>
//         </div>
        
//       )}
//       {products.length>0 && <Button childrenText="Save Data" className="ml-[48%] mt-6" onClick={saveData} />}
//     </>
//   );
// }

// export default NewInvoice;


import React, { useState } from "react";
import Button from "../Button";
import { useSelector } from "react-redux";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../fireBase/fireBase";
import { useNavigate } from "react-router-dom";

function NewInvoice() {
  const [CustomerName, setCustomerName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [productName, setproductName] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const authStatus = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const itemsHead = [
    { name: "Sr.No" },
    { name: "Product Name" },
    { name: "Price" },
    { name: "Quantity" },
    { name: "Total" },
  ];

  const addProduct = (e) => {
    e.preventDefault();

    const numericPrice = parseFloat(price);
    const numericQty = parseInt(quantity);

    if (!productName || isNaN(numericPrice) || isNaN(numericQty)) {
      alert("Please enter valid product, price, and quantity");
      return;
    }

    const subTotal = numericPrice * numericQty;

    setProducts([
      {
        id: products.length,
        name: productName,
        price: numericPrice,
        qty: numericQty,
      },
      ...products,
    ]);

    setTotal((prev) => prev + subTotal);
    setproductName("");
    setquantity(1);
    setprice("");
  };

  const saveData = async () => {
    const data = await addDoc(collection(db, "invoices"), {
      CustomerName: CustomerName,
      phoneNumber: phoneNumber,
      products: products,
      total: total,
      address: address,
      userId: authStatus.uid,
      date: Timestamp.fromDate(new Date()),
    });
    navigate("/dashboard/invoices");
  };

  return (
    <>
      <div className="px-4 w-full">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              value={CustomerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              placeholder="Customer Name"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              required
              placeholder="Phone Number"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              required
              placeholder="Address"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <input
              type="text"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
              required
              placeholder="Product Name"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              required
              placeholder="Price"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              required
              placeholder="Quantity"
              className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <Button childrenText="Add Product" onClick={addProduct} className="mt-2 w-full sm:w-64" />
          </div>
        </form>
      </div>

      {products.length > 0 && (
        <div className="flex justify-center items-center mt-6 px-2">
          <div className="bg-[#1e1e1e] lg:w-full w-[450px] max-w-6xl rounded-md p-4 overflow-x-auto">
            <div className="bg-[#1e1e1e] flex justify-between min-w-[600px] px-2">
              {itemsHead.map((item, index) => (
                <p key={index} className="font-bold underline bg-[#1e1e1e] text-[#00d8d8] w-full text-center">
                  {item.name}
                </p>
              ))}
            </div>
            {products.map((product, index) => (
              <div key={index} className="bg-[#1e1e1e] flex justify-between items-center mt-3 min-w-[600px] px-2">
                <p className="w-full text-center bg-[#1e1e1e]">{index + 1}</p>
                <p className="w-full text-center bg-[#1e1e1e]">{product.name}</p>
                <p className="w-full text-center bg-[#1e1e1e]">{product.price}</p>
                <p className="w-full text-center bg-[#1e1e1e]">{product.qty}</p>
                <p className="w-full text-center bg-[#1e1e1e]">{product.price * product.qty}</p>
              </div>
            ))}

            <div className="bg-[#00d8d8] rounded-full py-2 mt-6 text-center font-semibold text-black">
              Total Amount: <span className="font-bold bg-[#00d8d8]">{total}</span>
            </div>
          </div>
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center mt-6">
          <Button childrenText="Save Data" className="w-full sm:w-64" onClick={saveData} />
        </div>
      )}
    </>
  );
}

export default NewInvoice;

