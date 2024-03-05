import React from 'react';

interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <h6 className="mb-4 text-4xl font-extrabold
    leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl
    dark:text-black">
      {title}
    </h6>
  );
}

export default Heading;