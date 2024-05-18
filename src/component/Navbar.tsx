import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-white">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="text-white">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a className="text-white">Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/customers">
            <a className="text-white">Customers</a>
          </Link>
        </li>
        <li>
          <Link href="/suppliers">
            <a className="text-white">Suppliers</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
