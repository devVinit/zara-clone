import React from 'react';
import loader from '../assets/images/loader.gif';

export const LoaderComponent: React.FC = () => {
	return <div className="flex bg-white opacity-25 h-full w-full absolute top-0 bottom-0 left-0 right-0 z-10 justify-center items-center">
		<img src={loader} alt="" />
	</div>;
};