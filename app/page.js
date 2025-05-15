"use client"

import Image from "next/image";
import Header from "./components/Header";
import AvatarGrid from "./components/AvatarGrid";
import CreateAvatarModel from "./components/CreateAvatarModel";
import { useState } from 'react';
 
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
    <>
    <Header/>
    <AvatarGrid/>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition"
      >
        + Create New Avatar
      </button>


      <CreateAvatarModel  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

    </>
  );
}
