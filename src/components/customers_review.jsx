// import PropTypes from "prop-types";
//import { GrFormNext } from "react-icons/gr";
import { IoChevronForwardOutline, IoChevronBackOutline } from "../icon";
import Sarah from "../materials/customers/1.png";
// import Sarah from "../materials/customers/23.png";
import Emily from "../materials/customers/2.png";
import Bimpe from "../materials/customers/3.png";
import { HiStar } from "react-icons/hi2";

// const customers = [
//   {
//     image: Sarah,
//     review:
//       "Impressive variety of styles and brands. My clothes were perfect fit",
//     name: "Sarah J.",
//     role: "UI Designer",
//   },
//   {
//     image: Emily,
//     review:
//       "Easy to use app with great trends and personalized recommendations. Highly recommended.",
//     name: "Emily R",
//     role: "Baker",
//   },
//   {
//     image: Bimpe,
//     review: "I got my exact order and they were perfect fit",
//     name: "Bimpe O.",
//     role: "Student",
//   },
// ];

// const CustomersReview = () => {
//   return (
//     <>
//       <div className="bg-sblue w-full mb-1">
//         <div className="mt-10">
//           <h1 className="text-3xl font-medium mb-9 text-center pt-16">
//             Our Customers Review
//           </h1>

//           <div className="overflow-hidden w-full">
//             <div className="flex gap-8 whitespace-nowrap">
//               {/* animate-scroll */}
//               {customers.map((customer) => (
//                 <Customer customer={customer} key={customer.name} />
//               ))}
//             </div>
//           </div>

//           <Scroll />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CustomersReview;

// Customer.propTypes = {
//   customer: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     role: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     review: PropTypes.string,
//   }).isRequired,
// };

// function Customer({ customer }) {
//   return (
//     <div className="bg-white flex items-center gap-10 rounded-md w-[90%] mb-5 p-5">
//         <img
//           src={customer.image}
//           alt={customer.name}
//           className=" w-[35%] mobile:w-[20%]  mobile:mr-6 "
//         />

//         <span className="flex flex-col  ">
//           <p className="font-semibold text-black text-xs leading-5  mb-5 text-wrap">
//             &quot;{customer.review}&quot;
//           </p>
//           <Stars />
//           <hr className="w-32  border-[#98A2B3]" />
//           <p className="font-semibold text-lg mb-0.5">{customer.name}</p>
//           <span className="text-[11px] font-medium">{customer.role}</span>
//         </span>

//     </div>
//   );
// }

// function Scroll() {
//   return (
//     <div className=" flex justify-center gap-3 pb-14 mt-4 ">
//       {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
//       <span className="bg-white rounded-[50%] p-2">
//         <IoChevronBackOutline
//           size={20}
//           className="text-[#98A2B3] rounded-[50%] cursor-pointer"
//         />
//       </span>
//       <span className="bg-white rounded-[50%] p-2">
//         <IoChevronForwardOutline
//           size={20}
//           className=" rounded-[50%] active:text-rblue text-rblue cursor-pointer"
//         />
//       </span>
//     </div>
//   );
// }
// function Stars() {
//   return (
//     <div className="flex mb-4">
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//       <HiStar size={15} className="text-warning" />
//     </div>
//   );
// }

const CustomersReview = () => {
  return (
    <>
      <div className="bg-sblue w-full mb-1">
        <div className="mt-10">
          <h1 className="text-3xl font-medium mb-9 text-center pt-16">
            Our Customers Review
          </h1>
          <div className="flex gap-7 overflow-hidden ">
            {/* gap-4 */}
            <div className="flex mobile:hidden bg-white w-[50%] rounded-md mb-5">
              <img
                src={Sarah}
                alt="Sarah"
                className="h-[60%] w-[25%] mobile:w-[20%] mr-14 mobile:mr-6 my-auto "
              />
              <div className="flex flex-col pr-4 my-auto">
                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                <p className="font-semibold text-black text-xs leading-5 w-[90%] mobile:w-[40] mb-5">
                  &quot;Impressive variety of styles and brands. My clothes were
                  perfect fit&quot;
                </p>
                <div className="flex mb-4">
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                </div>
                <hr className="w-32  border-[#98A2B3] " />
                <p className="font-semibold text-xl mb-0.5 capitalize  ">
                  sarah j.
                </p>
                <p className="text-[11px] font-medium">UI Designer</p>
              </div>
            </div>

            <div className="flex bg-white w-[60%] rounded-md mb-5 pl-8">
              <img
                src={Emily}
                alt="Emily"
                className="h-[60%] w-[35%]   mr-14 mobile:mr-2 my-auto "
              />
              <div className="flex flex-col pr-4  my-auto">
                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                <p className="font-semibold text-black text-xs leading-5 w-full mb-5">
                  &quot;Easy to use app with great trends and personalized
                  recommendations. Highly recommended.&quot;
                </p>
                <div className="flex mb-4">
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                </div>
                <hr className="w-32  border-[#98A2B3] " />
                <p className="font-semibold text-lg capitalize mb- ">
                  emily r.
                </p>
                <p className="text-[11px] font-medium">Baker</p>
              </div>
            </div>

            <div className="flex bg-white w-[50%] mobile:hidden rounded-md mb-5 pl-8 border-r-0">
              <img
                src={Bimpe}
                alt="Bimpe"
                className="h-[60%] w-[40%] mobile:w-  mr-8 mobile:mr-2 my-auto "
              />
              <div className="flex flex-col my-auto">
                {/* pr-4 */}
                {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
                <p className="font-semibold text-black text-xs leading-5 w-full mb-5">
                  &quot;I got my exact order and they were perfect fit&quot;
                </p>

                <div className="flex mb-4">
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                  <HiStar size={15} className="text-warning" />
                </div>
                <hr className="w-32  border-[#98A2B3] " />
                <p className="font-semibold text-lg capitalize mb- ">
                  bimpe o.
                </p>
                <p className="text-[11px] font-medium">Student</p>
              </div>
            </div>
          </div>

          <div className=" flex justify-center gap-3 pb-14 mt-4 ">
            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            <span className="bg-white rounded-[50%] p-2">
              <IoChevronBackOutline
                size={20}
                className="text-[#98A2B3] rounded-[50%] cursor-pointer"
              />
            </span>
            <span className="bg-white rounded-[50%] p-2">
              <IoChevronForwardOutline
                size={20}
                className=" rounded-[50%] active:text-rblue text-rblue cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersReview;
