import React from 'react';
import { Helmet } from 'react-helmet';
import { clients } from './clients';
import ClientGrid from './ClientGrid';
import Globe3D from './Globe3D';
import { useState } from 'react';

export default function Portfolio3D() {
  const [selectedClientId, setSelectedClientId] = useState(null);
  const handleSelectClient = (id) => setSelectedClientId(id);
  return (
    <>
      <Helmet>
        <title>3D Interactive Portfolio | SumitDev</title>
        <meta name="description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:title" content="3D Interactive Portfolio | SumitDev" />
        <meta property="og:description" content="Explore SumitDev's portfolio in an interactive 3D experience. Modern UI, SEO-optimized, and visually stunning projects." />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="min-h-screen bg-gradient-to-br from-background via-surface to-muted flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">3D Interactive Portfolio</h1>
        <p className="text-lg text-center mb-8 max-w-2xl">Explore our international client work in a modern, interactive 3D-inspired portfolio. Click a marker on the globe to see the project emerge as if it's being built in the real world.</p>
        <div className="w-full max-w-5xl h-[400px] bg-black/80 rounded-2xl flex items-center justify-center text-white text-2xl mb-10">
          <Globe3D onSelectClient={handleSelectClient} />
        </div>
        {/* Animate the selected project card to "emerge" */}
        <div className="w-full flex justify-center">
          {selectedClientId ? (
            <div className="animate-fade-in-up w-full max-w-2xl">
              <ClientGrid clients={clients.filter(c => c.id === selectedClientId)} />
            </div>
          ) : (
            <div className="opacity-60">
              <ClientGrid clients={clients} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
