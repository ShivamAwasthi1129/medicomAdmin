import Image from 'next/image';

const TopCustomers = () => {
  const customers = [
    {
      name: 'Emma Wilson',
      purchases: 15,
      amount: 1865,
      avatar: '/path/to/emma-avatar.png',
    },
    {
      name: 'Robert Lewis',
      purchases: 18,
      amount: 2225,
      avatar: '/path/to/robert-avatar.png', 
    },
    {
      name: 'Angelina Hose',
      purchases: 21,
      amount: 1765,
      avatar: '/path/to/angelina-avatar.png', 
    },
    {
      name: 'Samantha Sam',
      purchases: 24,
      amount: 2565,
      avatar: '/path/to/samantha-avatar.png', 
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto md:max-w-lg">
      <h2 className="text-xl font-bold mb-6">Top Customers</h2>
      <ul>
        {customers.map((customer, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-4 border-b border-gray-200 last:border-none"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={customer.avatar}
                  alt={customer.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-base">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.purchases} Purchases</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-lg">${customer.amount.toLocaleString()}</p>
              <span className="text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCustomers;
