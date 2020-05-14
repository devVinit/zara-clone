import React from 'react';

interface SideBarComponentProps {
  isHoverSideBar: boolean;
  setIsHoverSideBar: any;
}

export const SideBarComponent: React.SFC<SideBarComponentProps> = (props) => {
  return <div className={`fixed bg-white h-screen flex items-center justify-center transition-all duration-500 ${props.isHoverSideBar ? 'w-1/4' : 'w-0'}`}
    onMouseLeave={() => props.setIsHoverSideBar(!props.isHoverSideBar)}>
    <ul className={`h-full flex flex-col justify-center` }>
      <li className="text-5xl font-francois">Woman</li>
      <li className="text-5xl font-francois">Man</li>
      <li className="text-5xl font-francois">Shoes&Bags</li>
    </ul>
  </div>;
};