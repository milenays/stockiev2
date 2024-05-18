import Link from 'next/link';

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-500">About Stockie</h1>
      <Link href="/" legacyBehavior>
        <a className="text-blue-500">Home</a>
      </Link>
    </div>
  );
}
