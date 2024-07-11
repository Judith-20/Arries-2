// import React from 'react';
// import Zee from '../materials/productslisting/11.png';
// import Zara from '../materials/productslisting/12.png';
// import Beam from '../materials/productslisting/13.png';
// import Zamaiah from '../materials/productslisting/14.png';
// import Zoe from '../materials/productslisting/15.png';
// import Tubo from '../materials/popular/6.png';
// import Blaze from '../materials/productslisting/16.png';
// import Mays from '../materials/productslisting/17.png';
// import { BsDashCircleFill, IoIosAddCircleOutline, PiCurrencyNgn, GoHeart, GoHeartFill, HiStar  } from "../icon";
// // import { IoIosAddCircleOutline } from "react-icons/io";
// // import { PiCurrencyNgn } from "react-icons/pi";
// // import { GoHeart } from "react-icons/go";
// // import { GoHeartFill } from "react-icons/go";
// // import { PiCurrencyNgn } from "react-icons/pi";
// //import { NavLink } from 'react-router-dom';

// const Corporate = () => {
  
//     return (
//         <>
//           {/* hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."> */}
//         <div className="mb-10 mt-4">
//             <h1 className="text-xl font-semibold mb-4 ">Corporate</h1>
//          <div className="flex flex-wrap gap-5 mobile: w-full relative">

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%] ">
//               <img src={Zee} alt="Zee Dress" className='h-[65%] mobile:h-[60%] w-full  ' />
//               <div className='flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full '>
//               <p className='font-bold capitalize '>zee dress</p>
//               <GoHeart size={16} className='text-error pr- mr-4 mobile:mr-1' />
//               </div>
//               <p className="text-sm  mobile:text-[8.2px] text-[#98A2B3]  w-[90%] pb-1.5 mobile:pb-0 ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//                 <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold mobile:pl-0.5 ' /><p className='font-extrabold text-lg mobile:text-sm '>302,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer mobile:pr-1' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%]">
//               <img src={Zara} alt="Zara Dress" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>Zara dress</p>
//               <GoHeartFill size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>202,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-47">
//               <img src={Beam} alt="Beam Dress" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>beam dress</p>
//               <GoHeart size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>205,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] ">
//               <img src={Zamaiah} alt="Zamaiah Dress" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>Zamaiah dress</p>
//               <GoHeartFill size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>100,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
//               <img src={Zoe} alt="Zoe Dress" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>zoe dress</p>
//               <GoHeartFill size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>150,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
//               <img src={Tubo} alt="" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>tubo dress</p>
//               <GoHeart size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>220,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

            
//            <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4 ">
//               <img src={Blaze} alt="" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>blaze dress</p>
//               <GoHeartFill size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>120,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>
            

//             <div className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mt-4">
//               <img src={Mays} alt="" className='h-[65%] w-full  ' />
//               <div className='flex justify-between pt-2.5 '>
//               <p className='font-bold text-lg  capitalize '>mays dress</p>
//               <GoHeartFill size={16} className='text-error mr-2' />
//               </div>
//               <p className="text-sm text-[#98A2B3] font- w-[90%] pb-1.5  ">Elegant summer dress made with plain silk</p>

//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//               <div className="flex items-center w-[70.2%] pb-2  ">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs  ">4.8 (222)</p>
//               </div>
//               <div className="flex items-center justify-between ">
//               <span className="flex items-center">
//                     <PiCurrencyNgn size={18} className='text-bold ' /><p className='font-extrabold text-lg '>100,000</p>
//                 </span>
//                 <span className="flex items-center pr-2 ">
//                     <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 cursor-pointer' /> 1 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer' />
//                 </span>
//               </div>
//               {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}

//             </div>

//             </div>
//           </div>   
//         </>
//     );
// };

// export default Corporate;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Zee from '../materials/productslisting/11.png';
import Zara from '../materials/productslisting/12.png';
import Beam from '../materials/productslisting/13.png';
import Zamaiah from '../materials/productslisting/14.png';
import Zoe from '../materials/productslisting/15.png';
import Tubo from '../materials/popular/6.png';
import Blaze from '../materials/productslisting/16.png';
import Mays from '../materials/productslisting/17.png';
import { BsDashCircleFill, IoIosAddCircleOutline, PiCurrencyNgn, GoHeart, GoHeartFill, HiStar } from "../icon";

const Corporate = ({ onCartUpdate }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState({});

  const products = [
    { id: 1, name: 'Zee Dress', img: Zee, price: 302000, rating: 4.8, reviews: 222 },
    { id: 2, name: 'Zara Dress', img: Zara, price: 202000, rating: 4.8, reviews: 222 },
    { id: 3, name: 'Beam Dress', img: Beam, price: 205000, rating: 4.8, reviews: 222 },
    { id: 4, name: 'Zamaiah Dress', img: Zamaiah, price: 100000, rating: 4.8, reviews: 222 },
    { id: 5, name: 'Zoe Dress', img: Zoe, price: 150000, rating: 4.8, reviews: 222 },
    { id: 6, name: 'Tubo Dress', img: Tubo, price: 220000, rating: 4.8, reviews: 222 },
    { id: 7, name: 'Blaze Dress', img: Blaze, price: 120000, rating: 4.8, reviews: 222 },
    { id: 8, name: 'Mays Dress', img: Mays, price: 100000, rating: 4.8, reviews: 222 },
  ];

  const handleFavoriteToggle = (id) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [id]: !prevFavorites[id]
    }));
  };

  const handleAddToCart = (id) => {
    setCart(prevCart => {
      const newQuantity = (prevCart[id] || 0) + 1;
      const newCart = { ...prevCart, [id]: newQuantity };
      onCartUpdate(Object.values(newCart).reduce((acc, curr) => acc + curr, 0));
      return newCart;
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => {
      const newQuantity = (prevCart[id] || 1) - 1;
      if (newQuantity <= 0) {
        const { [id]: removed, ...newCart } = prevCart;
        onCartUpdate(Object.values(newCart).reduce((acc, curr) => acc + curr, 0));
        return newCart;
      } else {
        const newCart = { ...prevCart, [id]: newQuantity };
        onCartUpdate(Object.values(newCart).reduce((acc, curr) => acc + curr, 0));
        return newCart;
      }
    });
  };

  const handleProductClick = (product) => {
    navigate('/product-details', { state: { product } });
  };

  return (
    <div className="mb-10 mt-4">
      <h1 className="text-xl font-semibold mb-4">Corporate</h1>
      <div className="flex flex-wrap gap-5 mobile:w-full relative">
        {products.map(product => (
          <div key={product.id} className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%]" onClick={() => handleProductClick(product)}>
            <img src={product.img} alt={product.name} className="h-[65%] mobile:h-[60%] w-full" />
            <div className='flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full'>
              <p className='font-bold capitalize'>{product.name}</p>
              {favorites[product.id] ? (
                <GoHeartFill size={16} className='text-error pr- mr-4 mobile:mr-1' onClick={(e) => { e.stopPropagation(); handleFavoriteToggle(product.id); }} />
              ) : (
                <GoHeart size={16} className='text-error pr- mr-4 mobile:mr-1' onClick={(e) => { e.stopPropagation(); handleFavoriteToggle(product.id); }} />
              )}
            </div>
            <p className="text-sm mobile:text-[8.2px] text-[#98A2B3] w-[90%] pb-1.5 mobile:pb-0">Elegant summer dress made with plain silk</p>
            <div className="flex items-center w-[70.2%] pb-2">
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={15} className='text-warning' />
              <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
              <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]">{product.rating} ({product.reviews})</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <PiCurrencyNgn size={18} className='text-bold mobile:pl-0.5' /><p className='font-extrabold text-lg mobile:text-sm'>{product.price.toLocaleString()}</p>
              </span>
              <span className="flex items-center pr-2">
                <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer' onClick={(e) => { e.stopPropagation(); handleRemoveFromCart(product.id); }} /> {cart[product.id] || 0} <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer mobile:pr-1' onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corporate;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Zee from '../materials/productslisting/11.png';
// import Zara from '../materials/productslisting/12.png';
// import Beam from '../materials/productslisting/13.png';
// import Zamaiah from '../materials/productslisting/14.png';
// import Zoe from '../materials/productslisting/15.png';
// import Tubo from '../materials/popular/6.png';
// import Blaze from '../materials/productslisting/16.png';
// import Mays from '../materials/productslisting/17.png';
// import { BsDashCircleFill, IoIosAddCircleOutline, PiCurrencyNgn, GoHeart, GoHeartFill, HiStar } from "../icon";

// const Corporate = ({ cart, onAddToCart, onRemoveFromCart }) => {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState({});

//   const products = [
//     { id: 1, name: 'Zee Dress', img: Zee, price: 302000, rating: 4.8, reviews: 222 },
//     { id: 2, name: 'Zara Dress', img: Zara, price: 202000, rating: 4.8, reviews: 222 },
//     { id: 3, name: 'Beam Dress', img: Beam, price: 205000, rating: 4.8, reviews: 222 },
//     { id: 4, name: 'Zamaiah Dress', img: Zamaiah, price: 100000, rating: 4.8, reviews: 222 },
//     { id: 5, name: 'Zoe Dress', img: Zoe, price: 150000, rating: 4.8, reviews: 222 },
//     { id: 6, name: 'Tubo Dress', img: Tubo, price: 220000, rating: 4.8, reviews: 222 },
//     { id: 7, name: 'Blaze Dress', img: Blaze, price: 120000, rating: 4.8, reviews: 222 },
//     { id: 8, name: 'Mays Dress', img: Mays, price: 100000, rating: 4.8, reviews: 222 },
//   ];

//   const handleFavoriteToggle = (id) => {
//     setFavorites(prevFavorites => ({
//       ...prevFavorites,
//       [id]: !prevFavorites[id]
//     }));
//   };

//   const handleProductClick = (product) => {
//     navigate('/product-details', { state: { product } });
//   };

//   return (
//     <div className="mb-10 mt-4">
//       <h1 className="text-xl font-semibold mb-4">Corporate</h1>
//       <div className="flex flex-wrap gap-5 mobile:w-full relative">
//         {products.map(product => (
//           <div key={product.id} className="flex flex-col hover:-translate-y-1 hover:scale-105 duration-300 w-[23.8%] mobile:w-[47%]" onClick={() => handleProductClick(product)}>
//             <img src={product.img} alt={product.name} className="h-[65%] mobile:h-[60%] w-full" />
//             <div className='flex justify-between items-center pt-2.5 mobile:pt-2 mobile:w-full'>
//               <p className='font-bold capitalize'>{product.name}</p>
//               {favorites[product.id] ? (
//                 <GoHeartFill size={16} className='text-error pr- mr-4 mobile:mr-1' onClick={(e) => { e.stopPropagation(); handleFavoriteToggle(product.id); }} />
//               ) : (
//                 <GoHeart size={16} className='text-error pr- mr-4 mobile:mr-1' onClick={(e) => { e.stopPropagation(); handleFavoriteToggle(product.id); }} />
//               )}
//             </div>
//             <p className="text-sm mobile:text-[8.2px] text-[#98A2B3] w-[90%] pb-1.5 mobile:pb-0">Elegant summer dress made with plain silk</p>
//             <div className="flex items-center w-[70.2%] pb-2">
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={15} className='text-warning' />
//               <HiStar size={16} className='text-[#E4E7EC] mr-1.5' />
//               <p className="text-[#667085] font-medium text-xs mobile:text-[8.1px]">{product.rating} ({product.reviews})</p>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="flex items-center">
//                 <PiCurrencyNgn size={18} className='text-bold mobile:pl-0.5' /><p className='font-extrabold text-lg mobile:text-sm'>{product.price.toLocaleString()}</p>
//               </span>
//               <span className="flex items-center pr-2">
//                 <BsDashCircleFill size={17} className='text-[#D0D5DD] mr-2 mobile:pr-1 cursor-pointer'  /> {cart[product.id] || 0} 
//                 {/*  */}
//                 <IoIosAddCircleOutline size={21} className='ml-2 cursor-pointer mobile:pr-1' onClick={(e) => { e.stopPropagation(); onAddToCart(product.id); }} />
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Corporate;

// import React, { useState } from 'react';
// import { HiStar } from "../icon";
// import Corporate1 from '../materials/productslisting/12.png';
// import Corporate2 from '../materials/productslisting/13.png';
// import Corporate3 from '../materials/productslisting/14.png';
// import Corporate4 from '../materials/productslisting/15.png';
// import Corporate5 from '../materials/productslisting/16.png';
// import Corporate6 from '../materials/productslisting/17.png';
// import Corporate7 from '../materials/productslisting/18.png';
// import Corporate8 from '../materials/productslisting/19.png';
// import Corporate9 from '../materials/productslisting/20.png';
// import Corporate10 from '../materials/productslisting/21.png';
// import Corporate11 from '../materials/productslisting/22.png';

// const Corporate = ({ onCartUpdate }) => {
//   const [quantities, setQuantities] = useState(Array(11).fill(0)); // Assuming 11 items

//   const handleQuantityChange = (index, change) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] += change;
//     if (newQuantities[index] < 0) newQuantities[index] = 0;
//     setQuantities(newQuantities);

//     const totalQuantity = newQuantities.reduce((acc, val) => acc + val, 0);
//     onCartUpdate(totalQuantity);
//   };

//   return (
//     <>
//       <div className="mt-8 mb-4 text-[32px] font-bold tracking-wide mobile:ml-6 ml-8">
//         <h1>Corporate</h1>
//       </div>
//       <div className="grid grid-cols-4 gap-x-4 gap-y-6 place-items-center px-6 mb-10 mobile:grid-cols-2 mobile:px-1">
//         {/* Repeat for each product */}
//         {[
//           { src: Corporate1, name: 'Adire Shirt', price: 35000, id: 0 },
//           { src: Corporate2, name: 'Adire Shirt', price: 35000, id: 1 },
//           { src: Corporate3, name: 'Adire Shirt', price: 35000, id: 2 },
//           { src: Corporate4, name: 'Adire Shirt', price: 35000, id: 3 },
//           { src: Corporate5, name: 'Adire Shirt', price: 35000, id: 4 },
//           { src: Corporate6, name: 'Adire Shirt', price: 35000, id: 5 },
//           { src: Corporate7, name: 'Adire Shirt', price: 35000, id: 6 },
//           { src: Corporate8, name: 'Adire Shirt', price: 35000, id: 7 },
//           { src: Corporate9, name: 'Adire Shirt', price: 35000, id: 8 },
//           { src: Corporate10, name: 'Adire Shirt', price: 35000, id: 9 },
//           { src: Corporate11, name: 'Adire Shirt', price: 35000, id: 10 },
//         ].map((product) => (
//           <div key={product.id} className="border border-[#D0D5DD] rounded-lg px-3 pb-3">
//             <img src={product.src} alt="" className="w-full pt-1" />
//             <p className="text-base font-semibold mt-2">{product.name}</p>
//             <p className="text-xs text-[#667085]">Jackets</p>
//             <div className="flex gap-1 text-[#FDB022]">
//               <HiStar size={15} />
//               <HiStar size={15} />
//               <HiStar size={15} />
//               <HiStar size={15} />
//               <HiStar size={15} />
//             </div>
//             <p className="text-sm font-semibold">₦{product.price.toLocaleString()}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <button
//                 className="bg-blue-500 text-white px-2 rounded"
//                 onClick={() => handleQuantityChange(product.id, 1)}
//               >
//                 +
//               </button>
//               <span>{quantities[product.id]}</span>
//               <button
//                 className="bg-red-500 text-white px-2 rounded"
//                 onClick={() => handleQuantityChange(product.id, -1)}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Corporate;

