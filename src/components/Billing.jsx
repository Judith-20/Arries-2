import { useState } from "react";
import { FaPlus, MdEdit } from "../icon";
import Card from "../materials/productslisting/product details/checkcard.png";
import PaymentModal from "./Modal";

function Billing() {
  const [showBillingForm, setShowBillingForm] = useState(true);
  const [showBillingDetails, setShowBillingDetails] = useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [isLoading, setIsLoading] = useState(false)
  // const [showOrderStatus, setShowOrderStatus] = useState(false)
  // const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState(null); // Start with no modal

  const handlePayment = () => {
    // setIsProcessing(true);

    // // Simulate payment process
    // setTimeout(() => {
    //   setIsProcessing(false);
    //   alert("Payment Successful!");
    // }, 3000);

    setStatus("loading"); // Show "Payment in Progress"

    setTimeout(() => {
      // Randomly select success or error after 3 seconds
      const randomResult = Math.random() > 0.5 ? "success" : "error";
      setStatus(randomResult);
    }, 3000);
  };

  function handleFormToggle(){
    if (showBillingDetails) {
      setShowBillingDetails(false)
      setShowBillingForm(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!phoneNumber || !email || !address) return;
    setShowBillingForm((show) => !show);
    setShowBillingDetails(true);
  }
  return (
    <div className="py-4">
      {showBillingForm && (
        <div className="">
          <h2 className="font-semibold text-lg mt-4 text-center">
            Billing Form
          </h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="px-14 flex flex-col gap-6 py-7"
          >
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              <div className="flex flex-col gap">
                <label htmlFor="fName" className="font-medium text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap">
                <label
                  htmlFor="city"
                  className="font-medium text-black text-sm"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="e.g Akure"
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="lName" className="font-medium text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lName"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="Doe"
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="state" className="font-medium text-sm">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="e.g Ondo"
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="email" className="font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="country" className="font-medium text-sm">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="e.g Nigeria"
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="tel" className="font-medium text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="e.g 0800 000 0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="zipCode" className="font-medium text-sm">
                  Zip Code
                </label>
                <input
                  type="number"
                  id="zipCode"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="e.g 19007"
                />
              </div>
              <div className="flex flex-col gap">
                <label htmlFor="address" className="font-medium text-sm">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="py-1 px-1.5 border border-rblue rounded-md text-sm placeholder:text-black focus:outline-rblue focus:outline-[0.5px]  "
                  placeholder="No 10, Street, State"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 font-semibold text-sm w-[47.5%]">
              <p className="text-[0.9rem]">Payment Details</p>
              <span className="flex flex-col">
                <span className="">Card Number</span>
                <input
                  type="text"
                  className="py-1 px-1.5  border border-rblue rounded-md focus:outline-0"
                  placeholder="e.g 5399 **** **** ****"
                />
              </span>
              <span className="flex gap-2 justify-between">
                <p className="flex flex-col">
                  <span className="">CVV</span>
                  <input
                    type="text"
                    className="py-1 px-1.5  border border-rblue rounded-md focus:outline-0"
                    placeholder="***"
                  />
                </p>
                <p className="flex flex-col">
                  <span className="">Expiry Date</span>
                  <input
                    type="text"
                    className="py-1 px-1.5  border border-rblue rounded-md focus:outline-0"
                    placeholder="**/**"
                  />
                </p>
              </span>

              <button className="text-whyte bg-rblue transition-all duration-300 py-2 hover:bg-[hsl(217,92%,45%)] hover:-translate-y-1 hover:shadow-lg rounded-md">
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}

      {showBillingDetails && (
        <div className="flex justify-between  mt-10 mb-8">
          <div className="mb-6 mr-72 ">
            <div className="flex pl-2 pr-5 justify-between items-center bg-[#F2F4F7] mb-5 w-[450px] ">
              <span className="py-3">
                <h6 className="text-xs font-semibold pb-2">Shipping Address</h6>
                {/* <p className="text-xs">12, Jimoh Lawal street, Alimosho Lagos.</p> */}
                <p className="text-xs">{address}</p>
              </span>
              <span className="bg-rblue w-5 h-5 rounded-[50%] ">
                <MdEdit
                  size={13}
                  className="text-white cursor-pointer ml-1 mt-0.5 "
                  onClick={handleFormToggle}
                />
              </span>
            </div>

            <div className="flex pl-2 pr-5 justify-between items-center bg-[#F2F4F7] mb-5 w-[450px] ">
              <span className="py-3">
                <h6 className="text-xs font-medium pb-2">
                  Contact Information
                </h6>
                {/* <p className="text-[10px]">
                +23400009000 <br />
                Raynejay@gmail.com
              </p> */}
                <p className="text-[10px]">
                  {phoneNumber} <br />
                  {email}
                </p>
              </span>
              <span className="bg-rblue w-5 h-5 rounded-[50%] ">
                <MdEdit
                  size={13}
                  className="text-white ml-1 mt-0.5 cursor-pointer"
                  onClick={handleFormToggle}
                />
              </span>
            </div>
            {/* <hr className=" border-[#D0D5DD] w-[158px] ml-[290px] " />
            <span className=" flex justify-end gap-7 ">
              <p className="text-error font-medium text-xs">Shipping Fee</p>

              <span className="flex">
                <PiCurrencyNgn size={13} className="mt-[1px]" />
                <p className="text-xs">3,000</p>
              </span>
            </span>
            <hr className=" border-[#D0D5DD] w-[158px] ml-[290px] " /> */}
          </div>

          <div className="rounded-2xl bg-[#F2F4F7] pt-5 pb-3 px-4 flex flex-col">
            <div className="flex justify-between">
              <p className="text-sm font-semibold mb-1">Payment Method</p>
              <span className="bg-rblue w-5 h-5 rounded-[50%] ">
                <MdEdit size={13} className="text-white ml-1 mt-0.5 cursor-pointer" onClick={handleFormToggle}/>
              </span>
            </div>

            <p className="bg-white w-12 text-rblue text-xs py-1 pl-[10px] mb-6 rounded-lg font-medium ">
              Card
            </p>

            <div className="flex justify-between">
              <img src={Card} alt="" className="h-[85%]  " />
              <span className="bg-rblue w-4 h-8 rounded-[8px] ">
                <FaPlus size={12} className="text-white ml-0.5 mt-[9px]" />
              </span>
            </div>
            <button
            onClick={handlePayment}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg duration-300 hover:bg-blue-700"
          >
            Pay Now
          </button>
          </div>

          <hr className="border border-[#D0D5DD] " />

          

          {/* Payment Modal */}
          <PaymentModal status={status} setStatus={setStatus} onHandlePayment={handlePayment}/>
        </div>
      )}
    </div>
  );
}


export default Billing;
