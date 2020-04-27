import React from 'react';

interface SideBarComponentProps {

}

export const SideBarComponent: React.SFC<SideBarComponentProps> = (props) => {
  return <div className="fixed bg-yellow-100 w-1/4 h-screen flex items justify-center">
      <ul className="h-full">
          <li>Woman</li>
          <li>man</li>
          <li>Shoes&Bags</li>
      </ul>
  </div>;
};