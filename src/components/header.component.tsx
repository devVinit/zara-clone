import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { SideBarComponent } from './sidebar.component';

interface HeaderComponentProps {
}

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
	const [isHoverSideBar, setIsHoverSideBar] = useState<boolean>(false);
	return <header className="h-24 relative">
		<SideBarComponent isHoverSideBar={isHoverSideBar} setIsHoverSideBar={setIsHoverSideBar}/>
		<div className="flex pt-6  items-center justify-between mx-3">
			<div className="flex items-center">
				<div className="mr-3 pr-2 cursor-pointer"
					onMouseEnter={(event) => {
						event.preventDefault();
						setIsHoverSideBar(true);
					}}
					>
					<svg width="32" height="32">
						<path fill="#000" fillRule="evenodd" d="M4 9h25v.5H4V9zm0 7.2h25v.5H4v-.5zm.3 7.3H4v.5h25v-.5H4.3z" clipRule="evenodd" />
					</svg>
				</div>
				<img className="w-40" src={logo} alt="logo" />
			</div>
			<div className="mr-10 relative flex justify-center items-center">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<path fill="#000" fillRule="nonzero" d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z" />
					</svg>
				</div>
				<span className="absolute">0</span>
			</div>
		</div>
		{/* <div className="absolute w-full inset-y-0.right-0 flex items-center justify-center mt-4">
			<span className="uppercase  text-xl font-black m-2">
				<a href="">Search</a>
			</span>
			<span className="border-black border-b w-32 m-2 mt-6 z-10" />
		</div> */}
	</header>;
};
