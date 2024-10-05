// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const ordersData = [
//   {
//     name: 'Peter Parkour',
//     price: 222.99,
//     deliveryDate: '24 May 2022',
//     status: 'active',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg',
//     products: [
//       { id: 1, name: 'Massage Gun', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Jackie Chen',
//     price: 232.99,
//     deliveryDate: '24 May 2022',
//     status: 'active',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Ryan Gerica',
//     price: 322.99,
//     deliveryDate: '24 May 2022',
//     status: 'completed',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Stethoscope', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Hugh Jackma',
//     price: 252.99,
//     deliveryDate: '24 May 2022',
//     status: 'completed',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Thermometer', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Pulse Oximeter', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'John Doe',
//     price: 199.99,
//     deliveryDate: '30 June 2022',
//     status: 'active',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Electric Toothbrush', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Hair Dryer', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Alice Wonderland',
//     price: 149.99,
//     deliveryDate: '15 July 2022',
//     status: 'completed',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Michael Scott',
//     price: 349.99,
//     deliveryDate: '20 August 2022',
//     status: 'active',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Laptop Stand', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   },
//   {
//     name: 'Michael Scott',
//     price: 349.99,
//     deliveryDate: '20 August 2022',
//     status: 'cancelled',
//     userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
//     products: [
//       { id: 1, name: 'Laptop Stand', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
//     ]
//   }
// ];

// const Orders = () => {
//   const [activeTab, setActiveTab] = useState("active");

//   const filteredOrders = ordersData.filter((order) => order.status === activeTab);

//   return (
//     <div className="max-w-4xl mx-auto p-6 border bg-white">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <p className="text-4xl font-bold">Orders</p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <button
//             onClick={() => setActiveTab("active")}
//             className={`px-6 py-2 ${activeTab === "active" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
//           >
//             Active Orders
//           </button>
//           <button
//             onClick={() => setActiveTab("completed")}
//             className={`px-6 py-2 ${activeTab === "completed" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
//           >
//             Completed
//           </button>
//           <button
//             onClick={() => setActiveTab("cancelled")}
//             className={`px-6 py-2 ${activeTab === "cancelled" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
//           >
//             Cancelled
//           </button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {filteredOrders.map((order, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col md:flex-row justify-between items-center p-6 bg-white shadow-md rounded-lg border border-gray-300 space-y-6 md:space-y-0 md:space-x-6 hover:bg-gray-50 transition"
//           >
//             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//               <div className="relative group w-16 h-16 rounded-full overflow-hidden">
//               <Image
//                   src={order.userImage}
//                   alt={order.name}
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row justify-between w-full text-center md:text-left gap-12">
//                 <p className="text-lg font-bold">
//                   <strong className="text-sm text-gray-600 font-normal">Name:</strong><br />
//                   {order.name}
//                 </p>
//                 <p className="text-lg font-bold">
//                   <strong className="text-sm text-gray-600 font-normal">Total Price:</strong><br />
//                   ${order.price}
//                 </p>
//                 <p className="text-lg font-bold">
//                   <strong className="text-sm text-gray-600 font-normal">Delivery Date:</strong><br />
//                   {order.deliveryDate}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4 mt-4 md:mt-0 gap-4">
//               <div className="relative group w-16 h-16 rounded-full overflow-hidden">
//                 <Image
//                   src={order.products[0].image}
//                   alt={order.products[0].name}
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//                 {order.products.length > 1 && (
//                   <div className="absolute hidden group-hover:block bg-gray-800 text-white p-4 rounded-lg text-sm shadow-lg">
//                     {order.products.slice(1).map((product) => (
//                       <p key={product.id}>{product.name}</p>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;



"use client";
import { useState } from "react";
import Image from "next/image";

 const ordersData = [
    {
      name: 'Peter Parkour',
      price: 222.99,
      deliveryDate: '24 May 2022',
      status: 'active',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg',
      products: [
        { id: 1, name: 'Massage Gun', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Jackie Chen',
      price: 232.99,
      deliveryDate: '24 May 2022',
      status: 'active',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Ryan Gerica',
      price: 322.99,
      deliveryDate: '24 May 2022',
      status: 'completed',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Stethoscope', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Hugh Jackma',
      price: 252.99,
      deliveryDate: '24 May 2022',
      status: 'completed',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Thermometer', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Pulse Oximeter', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'John Doe',
      price: 199.99,
      deliveryDate: '30 June 2022',
      status: 'active',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Electric Toothbrush', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Hair Dryer', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Alice Wonderland',
      price: 149.99,
      deliveryDate: '15 July 2022',
      status: 'completed',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Michael Scott',
      price: 349.99,
      deliveryDate: '20 August 2022',
      status: 'active',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Laptop Stand', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    },
    {
      name: 'Michael Scott',
      price: 349.99,
      deliveryDate: '20 August 2022',
      status: 'cancelled',
      userImage: 'https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg', // Add user image
      products: [
        { id: 1, name: 'Laptop Stand', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1680798709568-66fb4b1df656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ]
    }
  ];

const Orders = () => {
  const [activeTab, setActiveTab] = useState("active");

  const filteredOrders = ordersData.filter((order) => order.status === activeTab);

  return (
    <div className="max-w-4xl mx-auto p-6 border bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-4xl font-bold">Orders</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2 ${activeTab === "active" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
          >
            Active Orders
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 ${activeTab === "completed" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`px-6 py-2 ${activeTab === "cancelled" ? "bg-pink-500 text-white" : "bg-gray-100"} rounded-lg transition`}
          >
            Cancelled
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row justify-between items-center p-6 bg-white shadow-md rounded-lg border border-gray-300 space-y-6 md:space-y-0 md:space-x-6 hover:bg-gray-50 transition"
          >
            <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full">
              <div className="relative group w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={order.userImage}
                  alt={order.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow flex flex-col md:flex-row justify-between w-full gap-12">
                <p className="text-lg font-bold md:w-1/3">
                  <strong className="text-sm text-gray-600 font-normal">Name:</strong><br />
                  {order.name}
                </p>
                <p className="text-lg font-bold md:w-1/3">
                  <strong className="text-sm text-gray-600 font-normal">Total Price:</strong><br />
                  ${order.price}
                </p>
                <p className="text-lg font-bold md:w-1/3">
                  <strong className="text-sm text-gray-600 font-normal">Delivery Date:</strong><br />
                  {order.deliveryDate}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0 gap-4">
              <div className="relative group w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={order.products[0].image}
                  alt={order.products[0].name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
                {order.products.length > 1 && (
                  <div className="absolute hidden group-hover:block bg-gray-800 text-white p-4 rounded-lg text-sm shadow-lg">
                    {order.products.slice(1).map((product) => (
                      <p key={product.id}>{product.name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
