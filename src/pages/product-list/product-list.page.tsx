import React from 'react';

export const ProductListPage = (props: any) => {

    const products = [
        {
            name: 'TRENCH COAT WITH BELT',
            price: '79.85',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/1/p/0518/258/711/2/w/664/0518258711_1_1_1.jpg?ts=1582283454333'
        },
        {
            name: ' CROSSOVER LEATHER MID-HEEL MULES',
            label: 'NEW / +1 Colour',
            price: '49.95',
            imageUrl: 'https://static.zara.net/photos///2020/V/1/1/p/2336/510/040/2/w/664/2336510040_1_1_1.jpg?ts=1583492515343'
        },
        {
            name: 'BLOUSE WITH CUTWORK EMBROIDERY',
            label: '',
            price: '39.95',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/1/p/7200/029/712/13/w/664/7200029712_1_1_1.jpg?ts=1584463191104'
        },
        {
            name: 'BUCKET BAG WITH BAMBOO HANDLE',
            label: '',
            price: '49.95',
            imageUrl: 'https://static.zara.net/photos///2020/V/1/1/p/6440/510/001/2/w/664/6440510001_1_1_1.jpg?ts=1583397901435'
        },
        {
            name: 'SHELL HOOP EARRINGS',
            label: 'SPECIAL PRICE',
            price: '5.95',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/1/p/2673/002/402/2/w/664/2673002402_2_2_1.jpg?ts=1583938796456'
        },
        {
            name: 'JACQUARD DRESS',
            label: '',
            price: '39.95',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/1/p/1822/010/098/72/w/664/1822010098_1_1_1.jpg?ts=1584541861815'
        }
    ];

    return <div className="flex flex-wrap">
        <div className="w-full flex flex-wrap pt-32">
            {
                products.map(product => (
                    <div className="w-1/2 p-4">
                        <img src={product.imageUrl} alt="" />
                        <div className="py-4 flex flex-col">
                            {
                                Boolean(product.label) &&
                                <span className="font-bold">
                                    {product.label}
                                </span>
                            }
                            <a href="#" >
                                {product.name}
                            </a>
                            <span className="text-sm">{product.price} EUR</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}


