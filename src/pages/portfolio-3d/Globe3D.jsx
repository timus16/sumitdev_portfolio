import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

// Helper: Convert lat/lon to 3D sphere position
function latLongToVector3(lat, lon, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  ];
}

// Example: Add lat/lon to your clients.js for realism
// Expanded client locations for a more human, global feel
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

const Globe = ({ onSelectClient }) => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ height: 400, background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)' }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Stars radius={10} depth={50} count={4000} factor={3} fade />
      {/* Earth Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#b6e0fe" metalness={0.2} roughness={0.6} />
      </mesh>
      {/* Client Markers */}
      {clientLocations.map((loc, i) => {
        const [x, y, z] = latLongToVector3(loc.lat, loc.lon);
        return (
          <mesh
            key={loc.id}
            position={[x, y, z]}
            onClick={() => onSelectClient(loc.id)}
            scale={1.15}
          >
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial color="#2563eb" emissive="#60a5fa" />
            <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
              <div style={{
                fontSize: 16,
                color: '#2563eb',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: 8,
                padding: '2px 6px',
                boxShadow: '0 2px 8px #94a3b8',
                fontWeight: 600
              }}>
                ●
              </div>
            </Html>
          </mesh>
        );
      })}
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
