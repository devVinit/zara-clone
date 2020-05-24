import React, { useEffect, useRef, useState } from 'react';

export const ProductProfilePage = (props: any) => {

    const imageList = [
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_1_1_1.jpg?ts=1584463191104',
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_2_1_1.jpg?ts=1584463219464',
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_2_2_1.jpg?ts=1584463226078',
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_2_3_1.jpg?ts=1584463219462',
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_2_5_1.jpg?ts=1584463236526',
        'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/811/7200029712_6_1_1.jpg?ts=1584463185380'
    ];
    const productDetailConatinerERef = useRef<any>(null);
    const [fixedPoint, setFixedPoint] = useState<number>();

    let onScollListener;
    useEffect(() => {
        onScollListener = window.addEventListener('scroll', () => {
            document.documentElement.scrollTop > (productDetailConatinerERef.current.offsetHeight - window.innerHeight)
                ? setFixedPoint(productDetailConatinerERef.current.offsetHeight - window.innerHeight)
                : setFixedPoint(0);
        });

        return () => {
            onScollListener = null;
        }
    }, []);

    return <div className="flex flex-wrap">
        <div className="w-7/12 flex flex-wrap">
            {
                imageList.map((url, index) => <img key={index} src={url} alt="" />)
            }
        </div>
        <div ref={productDetailConatinerERef} className={`w-5/12 flex justify-center pt-32 right-0 ${Boolean(fixedPoint) ? 'fixed' : 'absolute'}`} style={{ top: fixedPoint ? -fixedPoint : 'auto' }}>
            <div className="w-4/5  p-10">
                <h1 className="text-3xl font-francois font-normal leading-tight">BLOUSE WITH CUTWORK EMBROIDERY</h1>
                <h5 className="text-xl">39.9 EUR</h5>
                <h5 className="pt-4">ECRU - 7200/029</h5>
                <p className="">Round neck blouse featuring long balloon sleeves with elastic detail, matching cutwork embroidery, a ruffled hem and button-up front.</p>
                <h5 className="pt-4">HEIGHT OF MODEL: 177 cm. / 69.6″</h5>
                <ul className="border-t border-black border-b mt-4">
                    <li className="p-2 cursor-pointer hover:bg-gray-300">button  XS</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-300">S</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-300">M</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-300">L</li>
                    <li className="p-2 cursor-pointer hover:bg-gray-300">XL</li>
                </ul>
                <button className="bg-black w-full mt-4 p-2">
                    <span className="font-francois font-normal text-white">ADD</span>
                </button>

                <ul className="list-disc mt-8 px-5">
                    <li className="text-xs leading-loose">COMPOSITION AND CARE</li>
                    <li className="text-xs leading-loose">DELIVERY, EXCHANGES AND RETURNS</li>
                    <li className="text-xs leading-loose">SHARE</li>
                </ul>
            </div>
        </div>
    </div>
}