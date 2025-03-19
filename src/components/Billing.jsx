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
    <div className="py-4 w-full">
      {showBillingForm && (
        <div className="w-full">
          <h2 className="font-semibold text-2xl md:text-lg mt-4 text-center">
            Billing Details
          </h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="px-14 flex flex-col gap-6 mobile:pt-5 py-7"
          >
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-3">
              <div className="flex flex-col mobile:order-1 mobile:gap-y-1.5">
                <label htmlFor="fName" className="md:font-medium md:text-sm text-xl font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col mobile:order-6 mobile:gap-y-1.5">
                <label
                  htmlFor="city"
                  className="md:font-medium md:text-sm text-xl font-semibold"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="e.g Akure"
                />
              </div>
              <div className="flex flex-col mobile:order-2 mobile:gap-y-1.5">
                <label htmlFor="lName" className="md:font-medium md:text-sm text-xl font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lName"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="Doe"
                />
              </div>
              <div className="flex flex-col mobile:order-7 mobile:gap-y-1.5">
                <label htmlFor="state" className="md:font-medium md:text-sm text-xl font-semibold">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="e.g Ondo"
                />
              </div>
              <div className="flex flex-col mobile:order-3 mobile:gap-y-1.5">
                <label htmlFor="email" className="md:font-medium md:text-sm text-xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="johndoe@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mobile:order-8 mobile:gap-y-1.5">
                <label htmlFor="country" className="md:font-medium md:text-sm text-xl font-semibold">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="e.g Nigeria"
                />
              </div>
              <div className="flex flex-col mobile:order-4 mobile:gap-y-1.5">
                <label htmlFor="tel" className="md:font-medium md:text-sm text-xl font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="e.g 0800 000 0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col mobile:order-9 mobile:gap-y-1.5">
                <label htmlFor="zipCode" className="md:font-medium md:text-sm text-xl font-semibold">
                  Zip Code
                </label>
                <input
                  type="number"
                  id="zipCode"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="e.g 19007"
                />
              </div>
              <div className="flex flex-col mobile:order-5 mobile:gap-y-1.5">
                <label htmlFor="address" className="md:font-medium md:text-sm text-xl font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md text-xl md:text-sm placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] shadow-md  "
                  placeholder="No 10, Street, State"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mobile:mt-4 md:font-medium font-semibold md:text-sm text-xl w-full md:w-[47.5%]">
              <p className=" md:text-[0.9rem]">Payment Details</p>
              <span className="flex flex-col mobile:gap-y-1.5">
                <label htmlFor="card-number" className="">Card Number</label>
                <input
                  type="number"
                  id="card-number"
                  className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] font-normal shadow-md"
                  placeholder="e.g 5399 **** **** ****"
                />
              </span>
              <span className="flex mobile:flex-col gap-2 justify-between">
                <p className="flex flex-col mobile:gap-y-1.5">
                  <label htmlFor="cvv" className="">CVV</label>
                  <input
                    type="number"
                    id="cvv"
                    className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] font-normal shadow-md"
                    placeholder="***"
                  />
                </p>
                <p className="flex flex-col mobile:gap-y-1.5">
                  <label htmlFor="expiry-date" className="">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry-date"
                    className="md:py-1 md:px-1.5 py-[0.375rem] px-[0.9375rem] border border-[#A7C9FF] rounded-[10px] md:rounded-md placeholder:text-[#343330] text-[#343330] focus:outline-[#A7C9FF] focus:outline-[0.5px] font-normal shadow-md"
                    placeholder="**/**"
                  />
                </p>
              </span>

              <button className="text-[#FCFCFD] mobile:mt-4 font-bold text-sm md:text-base bg-rblue transition-all duration-300 py-2 hover:bg-[hsl(217,92%,45%)] hover:-translate-y-1 hover:shadow-lg rounded-lg md:rounded-md">
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}

      {showBillingDetails && (
        <div className="flex mobile:flex-col justify-between mt-10 mb-8 ">
          <div className="mb-6 md:mr-72">
            <div className="flex pl-2 pr-3 md:pr-5 justify-between items-center bg-[#F2F4F7] mb-5 md:w-[450px] ">
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

            <div className="flex pl-2 pr-3 md:pr-5 justify-between items-center bg-[#F2F4F7] mb-5 md:w-[450px] ">
              <span className="py-3">
                <h6 className="text-xs font-semibold pb-2">
                  Contact Information
                </h6>
                {/* <p className="text-[10px]">
                +23400009000 <br />
                Raynejay@gmail.com
              </p> */}
                <p className="text-xs font-medium">
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
