import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Stockie</h1>
      <Link href="/about">
        <a className="text-blue-500">About</a>
      </Link>
    </div>
  );
}
