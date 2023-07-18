
"use client"
import React from 'react';
import { useEffect } from 'react';

export const Ball = () => {
  const ball = React.createRef();


  useEffect(() => {
    const listener = (event) => {
      if (ball.current) {
        ball.current.style.left = `${event.pageX}px`;
        ball.current.style.top = `${event.pageY}px`;
      }
    };

    window.addEventListener('mousemove', listener);

    return () => {
      window.removeEventListener('mousemove', listener);
    };
  }, [ball]);

  return (
    <div
      className=" bg-gradient-to-r from-purple-600 to-purple-900 pointer-events-none absolute hidden h-80 w-80 translate-x-[-50%] translate-y-[-50%] transform rounded-full  blur-3xl md:block -z-50 opacity-20"
      ref={ball}
    />
  );
};