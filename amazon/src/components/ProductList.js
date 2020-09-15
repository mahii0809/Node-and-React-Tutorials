import React from 'react';
import Product from './Product';
const ProductList =(props) =>{
    const products=[{
        name:"iphone 11 pro",
        price:"100000",
        comments:"iPhone 11 Pro smartphone was launched on 10th September 2019. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 11 Pro is powered by a hexa-core Apple A13 Bionic processor.",
        imageUrl:"https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
    },
    {
        name:"vivo v11 pro",
        price:"60000",
        comments:"The Vivo V11 Pro is a solid all-rounder at Rs. 25,990 and offers better value than the Oppo F9 Pro (Review), but for a bit more money. Think of it as a Vivo X21 with a bigger battery and better front camera, but at a much more reasonable price, which is a good recipe.",
        imageUrl:"https://www.gizmochina.com/wp-content/uploads/2018/10/Vivo-V11-Pro.jpg"
    },
    {
        name:"Realme 3 pro",
        price:"17000",
        comments:"The depth sensor does a very good job with edge detection, and even in low light, we got a very pleasing bokeh effect.The Realme 3 Pro has a 25-megapixel selfie camera with an f/2.0 aperture. Under good light, we managed to get some good shots, and HDR works well too if you're shooting against the light.",
        imageUrl:"https://sc02.alicdn.com/kf/H1d7201c84f12489ba644672409e6fd82h.png_350x350.png"
    }
];
const update=(data)=>{
    console.log(data);
    props.updateCart(data);
}
    return <div className="row">
       {products.map((item,index)=>{
           return<Product productDetails={item}
           handleclick={update}/>
       })}
    </div>
}
export default ProductList;