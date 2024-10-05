import Image from 'next/image';

const TopSellingProducts = () => {
  const products = [
    {
      name: 'Blood Glucose Meter',
      category: 'OneTouch',
      stock: 'In Stock',
      totalSales: 8032,
      avatar: '/path/to/blood-glucose-meter.png',
      inStock: true,
    },
    {
      name: 'Stethoscope',
      category: 'Littmann',
      stock: 'In Stock',
      totalSales: 5358,
      avatar: '/path/to/stethoscope.png', 
      inStock: true,
    },
    {
      name: 'Hospital Bed',
      category: 'Invacare',
      stock: 'Out Of Stock',
      totalSales: 3845,
      avatar: '/path/to/hospital-bed.png', 
      inStock: false,
    },
    {
      name: 'Pulse Oximeter',
      category: 'Heart Rate Monitor',
      stock: 'Out Of Stock',
      totalSales: 11122,
      avatar: '/path/to/pulse-oximeter.png', 
      inStock: false,
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Top Selling Products</h2>
     
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 sm:py-3">S.no</th>
              <th className="text-left py-2 sm:py-3">Product Name</th>
              <th className="text-left py-2 sm:py-3">Category</th>
              <th className="text-left py-2 sm:py-3">Stock</th>
              <th className="text-left py-2 sm:py-3">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="py-3 sm:py-4">{index + 1}</td>
                <td className="py-3 sm:py-4 flex items-center space-x-2 sm:space-x-4">
                  <Image
                    src={product.avatar}
                    alt={product.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="text-sm sm:text-base">{product.name}</span>
                </td>
                <td className="py-3 sm:py-4 text-sm sm:text-base">{product.category}</td>
                <td className="py-3 sm:py-4">
                  {product.inStock ? (
                    <span className="text-green-500 bg-green-100 px-2 py-1 rounded-full text-xs sm:text-sm">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-xs sm:text-sm">
                      Out Of Stock
                    </span>
                  )}
                </td>
                <td className="py-3 sm:py-4 text-sm sm:text-base">{product.totalSales.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
