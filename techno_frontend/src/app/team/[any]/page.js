'use client';
import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    window.location.href = `/team`;
  }, []);

  return <div>page</div>;
};

export default page;
