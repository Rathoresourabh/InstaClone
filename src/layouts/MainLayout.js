import React from 'react'
import BottomNav from "../components/BottomNav";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
      <BottomNav />
    </div>
  );
}
