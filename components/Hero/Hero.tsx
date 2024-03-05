import React from 'react';

// import { Container } from './styles';
interface Props  {
  title: string;
  buttonText: string;
  image: string;
}

const Hero = ({ title, buttonText, image }: Props) => {
  const stylying = {
    // background-position: 50%;
    // background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
    // height: 500px;
    backgroundPosition: '50%',
    backgroundImage: `url('${image}')`,
    height: 500,
  }
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat"
    style={stylying}>
<div
  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
  <div className="flex h-full items-center justify-center">
    <div className="px-6 text-center text-white md:px-12">
      <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        {title}
      </h1>
      <button type="button"
        className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
        data-te-ripple-init data-te-ripple-color="light">
        {buttonText}
      </button>
    </div>
  </div>
</div>
</div>
  );
}

export default Hero;