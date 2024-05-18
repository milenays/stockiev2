import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Dashboard</Link>
        </li>
        <li>
          <Link href="/products" className="text-white">Products</Link>
        </li>
        <li>
          <Link href="/orders" className="text-white">Orders</Link>
        </li>
        <li>
          <Link href="/customers" className="text-white">Customers</Link>
        </li>
        <li>
          <Link href="/suppliers" className="text-white">Suppliers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
