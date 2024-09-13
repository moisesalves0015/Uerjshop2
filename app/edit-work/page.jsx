// app/edit-work/page.js

"use client";

import React, { useState } from 'react';
import Form from '@components/Form';
import Navbar from '@components/Navbar';

const EditWork = () => {
  const [work, setWork] = useState(null); // Valor padrão inicial
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', work);
  };

  return (
    <>
      <Navbar />
      <Form
        type="Edit"
        work={work}
        setWork={setWork}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditWork;
