import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-blue-500">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" legacyBehavior>
            <a className="text-blue-500">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/products" legacyBehavior>
            <a className="text-blue-500">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/orders" legacyBehavior>
            <a className="text-blue-500">Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/customers" legacyBehavior>
            <a className="text-blue-500">Customers</a>
          </Link>
        </li>
        <li>
          <Link href="/suppliers" legacyBehavior>
            <a className="text-blue-500">Suppliers</a>
          </Link>
        </li>
        <li>
          <Link href="/categories" legacyBehavior>
            <a className="text-blue-500">Categories</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
