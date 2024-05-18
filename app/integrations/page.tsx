'use client';
import { useEffect, useState } from 'react';

interface Integration {
  _id: string;
  name: string;
  type: string;
  apiKey: string;
  apiSecret: string;
  sellerId: string;
}

export default function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);

  useEffect(() => {
    const fetchIntegrations = async () => {
      const res = await fetch('/api/integrations');
      const data = await res.json();
      setIntegrations(data);
    };

    fetchIntegrations();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Integrations</h1>
      <ul className="w-full max-w-lg bg-white p-8 shadow-md rounded">
        {integrations.map((integration) => (
          <li key={integration._id} className="mb-4">
            <h2 className="text-xl font-bold">{integration.name}</h2>
            <p>Type: {integration.type}</p>
            <p>API Key: {integration.apiKey}</p>
            <p>API Secret: {integration.apiSecret}</p>
            <p>Seller ID: {integration.sellerId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
