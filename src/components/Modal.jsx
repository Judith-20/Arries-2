import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { FaCheck } from "../icon";

const PaymentModal = ({ status, setStatus, onHandlePayment }) => {
  if (!status) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-14 rounded-3xl shadow-lg flex flex-col items-center relative"
      >
        {/* Loader Animation */}
        {status === "loading" && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-[7px] border-blue-500 border-t-blue-100 rounded-full"
            ></motion.div>

            {/* Text */}
            <h2 className="mt-4 text-lg font-semibold">Payment in progress</h2>
            <p className="text-gray-500 text-sm">Please, wait a few moments</p>
          </>
        )}

        {/* SUCCESS STATE */}
        {status === "success" && (
          <>
            <p
              className="font-bold text-lg absolute top-3 right-3 cursor-pointer "
              onClick={() => setStatus(null)}
            >
              X
            </p>
            <span className="border-4 h-14 w-14 shadow-xl -translate-y-5 border-whyte rounded-full absolute right-[10.5rem] mobile:right-[50%] -top-1 bg-rblue flex justify-center items-center ">
            <FaCheck className="text-whyte text-4xl " />
            </span>
            <h2 className="text-lg font-semibold pb-1">Done!</h2>
            <p className="font-semibold text-sm">
              Your Card has been successfully charged.
            </p>
            
            <button className="mt-6 px-4 py-2 text-sm bg-[#F2F4F7] text-[#344054] font-medium cursor-pointer rounded-2xl" onClick={() => setStatus(null)}>
              Track My Order
            </button>
          </>
        )}

        {/* FAILURE STATE */}
        {status === "error" && (
          <>
            <p
              className="text-right font-bold cursor-pointer text-lg absolute top-3 right-3 "
              onClick={() => setStatus(null)}
            >
              X
            </p>
            <span className="border-4 h-14 w-14 shadow-xl -translate-y-5 border-whyte rounded-full absolute right-[10.5rem] mobile:right-[50%] -top-1 bg-error text-4xl text-whyte flex justify-center items-center ">
            !
            </span>
            {/* [#F2F4F7] [#D0D5DD] [#98A2B3] [#667085] #475467 #344054 #1D2939 #101828 */}
            <h2 className="text-lg font-semibold">Oops!</h2>
            <p className="font-semibold text-sm">
              Sorry, we couldn&apos;t process your payment.
            </p>
            <div className="mt-4 flex gap-5">
              <button
                className="px-6 py-2 bg-black text-white rounded-2xl cursor-pointer"
                onClick={onHandlePayment}
              >
                Try Again
              </button>
              <button
                className="px-8 py-2 bg-[#F2F4F7] text-[#344054] font-medium cursor-pointer rounded-2xl"
                onClick={() => setStatus(null)}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

PaymentModal.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  onHandlePayment: PropTypes.func,
};

export default PaymentModal;

// const PaymentModal = ({ isOpen }) => {
//     if (!isOpen) return null;

//     return (
//       <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//           {/* Rotating Gradient Border */}
//           <div className="relative w-14 h-14 flex items-center justify-center">
//             {/* Animated Border */}
//             <div className="absolute inset-0 rounded-full border-[7px] border-blue-500 border-t-blue-100 animate-spin-slow"
//                  >
//             </div>
//             {/* Inner Circle */}
//             <div className="w-10 h-10 bg-white rounded-full"></div>
//           </div>

//           {/* Text */}
//           <h2 className="mt-4 text-lg font-semibold">Payment in progress</h2>
//           <p className="text-gray-500 text-sm">Please, wait a few moments</p>
//         </div>
//       </div>
//     );
//   };

//   export default PaymentModal;
