import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Stockie</h1>
      <Link href="/dashboard" legacyBehavior>
        <a className="text-blue-500">Dashboard</a>
      </Link>
    </div>
  );
}
