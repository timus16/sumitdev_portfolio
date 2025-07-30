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
const clientLocations = [
  { id: 1, lat: 40.7128, lon: -74.0060 }, // New York
  { id: 2, lat: 51.5074, lon: -0.1278 }, // London
  { id: 3, lat: 35.6895, lon: 139.6917 }, // Tokyo
  { id: 4, lat: 52.52, lon: 13.405 }, // Berlin
];

const Globe = ({ onSelectClient }) => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ height: 400 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Stars radius={10} depth={50} count={5000} factor={4} fade />
      {/* Earth Sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Client Markers */}
      {clientLocations.map((loc, i) => {
        const [x, y, z] = latLongToVector3(loc.lat, loc.lon);
        return (
          <mesh
            key={loc.id}
            position={[x, y, z]}
            onClick={() => onSelectClient(loc.id)}
            scale={1.1}
          >
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color="#fbbf24" emissive="#f59e42" />
            <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
              <div style={{ fontSize: 12, color: "#fff", textShadow: "0 1px 4px #000" }}>●</div>
            </Html>
          </mesh>
        );
      })}
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default Globe;
