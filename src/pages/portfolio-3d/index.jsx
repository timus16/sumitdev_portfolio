import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Globe from './Globe3D';
import { clients } from './clients';

// Map each client to a lat/lon (add these to your client data for realism)
const clientLocations = [
  { id: 1, lat: 40.7128, lon: -74.0060 }, // New York
  { id: 2, lat: 51.5074, lon: -0.1278 }, // London
  { id: 3, lat: 35.6895, lon: 139.6917 }, // Tokyo
  { id: 4, lat: 52.52, lon: 13.405 }, // Berlin
  { id: 5, lat: 48.1351, lon: 11.5820 }, // Munich
  { id: 6, lat: 48.8566, lon: 2.3522 }, // Paris
  { id: 7, lat: 47.3769, lon: 8.5417 }, // Zurich
  { id: 8, lat: 25.2048, lon: 55.2708 }, // Dubai
  { id: 9, lat: -33.8688, lon: 151.2093 }, // Sydney
  { id: 10, lat: 43.6532, lon: -79.3832 }, // Toronto
];

export default function Portfolio3D() {
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSelectClient = (id) => {
    setSelectedClient(clients.find((c) => c.id === id));
  };

  return (
    <>
      <Helmet>
        <title>3D Interactive Portfolio | SumitDev</title>
        <meta name="description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:title" content="3D Interactive Portfolio | SumitDev" />
        <meta property="og:description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">3D Interactive Portfolio</h1>
        <p className="text-lg text-center mb-8 max-w-2xl">Navigate through a galaxy of projects. Click any marker to view client/project details.</p>
        <div className="w-full max-w-4xl h-[500px] bg-black rounded-2xl flex items-center justify-center">
          <Globe onSelectClient={handleSelectClient} clientLocations={clientLocations} />
        </div>
        {selectedClient && (
          <div className="mt-8 p-6 bg-white/90 dark:bg-card/90 border border-border rounded-xl shadow-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-2 text-primary">{selectedClient.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{selectedClient.city} • {selectedClient.category} • {selectedClient.year}</p>
            <p className="mb-2">{selectedClient.description}</p>
            <div className="flex items-center space-x-4 mt-2">
              {selectedClient.logo && <img src={selectedClient.logo} alt={selectedClient.name + ' logo'} className="h-10 w-10 rounded bg-white border" />}
              {selectedClient.images && selectedClient.images[0] && <img src={selectedClient.images[0]} alt={selectedClient.name + ' project'} className="h-16 w-16 rounded shadow" />}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
