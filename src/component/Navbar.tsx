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
          <Link href="/about" legacyBehavior>
            <a className="text-blue-500">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
