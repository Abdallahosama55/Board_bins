import React, { useState } from "react";
import Star15 from "../../../assets/dashboard/Star 15.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PlanButton = ({ onClick, text, className }) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

const PlanFeature = ({ text }) => (
  <div className="grid grid-cols-12 justify-start items-start mt-2">
    <div className=" col-span-1">
      <LazyLoadImage src={Star15} className="px-1" />
    </div>
    <p className="col-span-11 text-[.85rem] px-2">{text}</p>
  </div>
);

export default function Plan() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleTogglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  const buttonClass = (isMonthly, type) =>
    `rounded-[1.75rem] py-2 px-6 text-white font-inter text-lg font-[400] leading-[136%] me-8 ${
      isMonthly === type ? "bg-[#6161FF] " : "bg-[#E8E8E8] text-[black]"
    }`;

  return (
    <div className="">
      <div className="flex px-5" dir="rtl">
        <PlanButton
          onClick={handleTogglePlan}
          text="Monthly"
          className={buttonClass(isMonthly, true)}
        />
        <PlanButton
          onClick={handleTogglePlan}
          text="Annual"
          className={buttonClass(isMonthly, false)}
        />
      </div>
      <div className="grid grid-cols-12 justify-center mt-12 items-stretch   justify-center">
        {/* Free Plan */}
        <div className="md:col-span-4 text-[#404040] xl:col-span-4 lg:col-span-4  col-span-12 px-4 py-4 ms-6 me-6 rounded-[2.03756rem] border-[0.815px] border-gray-900 text-center mt-20">
          <h2 className="text-gray-900 font-poppins text-[2.32181rem] font-semibold leading-[184.523%] tracking-[0.04644rem]">
            Free
          </h2>
          <p className="text-gray-700 font-inter text-[1.88781rem] font-bold leading-[170%]">
            EGP 0
            <span className="text-gray-500 font-inter text-[1.30694rem] font-medium leading-[170%]">
              \ month
            </span>
          </p>
          <PlanButton
            text="Subscribe Now"
            className="mt-6 rounded-[1.75rem] bg-[#6161FF] py-2 px-6 text-white font-inter text-md font-[400] leading-[136%] me-8"
          />
          <div className="text-start mt-8 mb-8">
            <PlanFeature text="Limited access to service provider directory" />
            <PlanFeature text="Search on the service providers is limited to 3 timers only per day" />
            <PlanFeature text="One Category in Board" />
            <PlanFeature text="3 pins only" />
            <PlanFeature text="Manage basic projects with to-do lists and task assignments" />
            <PlanFeature text="web app" />
          </div>
        </div>

        {/* Standard Plan */}
        <div className="md:col-span-4 xl:col-span-4 text-[#404040] lg:col-span-4  col-span-12 ms-6 me-6 rounded-[2.03756rem] border-[0.815px] border-[#6161FF] text-center overflow-hidden">
          <div className="bg-[#6161FF] py-6 text-white font-inter text-3xl font-[400] leading-[136%]">
            Most Popular
          </div>
          <div className="px-4 py-4">
            <h2 className="text-gray-900 font-poppins text-[2.32181rem] font-semibold leading-[184.523%] tracking-[0.04644rem]">
              Standard
            </h2>
            <p className="text-gray-700 font-inter text-[1.88781rem] font-bold leading-[170%]">
              EGP 299
              <span className="text-gray-500 font-inter text-[1.30694rem] font-medium leading-[170%]">
                \ month
              </span>
            </p>
            <PlanButton
              text="Subscribe Now"
              className="mt-6 rounded-[1.75rem] bg-[#6161FF] py-2 px-6 text-white font-inter text-md font-[400] leading-[136%] me-8"
            />
            <ul className="text-start mt-8 mb-8">
              <PlanFeature text="Unlimited search per day (Editable)" />
              <PlanFeature text="Unlimited connection requests Find the PERFECT service provider for every need." />
              <PlanFeature text="Unlimited Categories in Board" />
              <PlanFeature text="Create Pins Collection" />
              <PlanFeature text="Project Management Powerhouse Collaborate seamlessly with advanced tools like shared boards, file sharing, and in-app messaging." />
              <PlanFeature text="Basic reporting and analytics" />
              <PlanFeature text="Exclusive Discounts: Get special offers from select service providers on the platform (limited time only!)." />
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className=" md:col-span-4 xl:col-span-4 text-[#404040] lg:col-span-4  col-span-12 px-4 py-4 ms-6 me-6 rounded-[2.03756rem] border-[0.815px] border-gray-900 text-center mt-20">
          <h2 className="text-gray-900 font-poppins text-[2.32181rem] font-semibold leading-[184.523%] tracking-[0.04644rem]">
            Premium
          </h2>
          <p className="text-gray-700 font-inter text-[1.88781rem] font-bold leading-[170%]">
            EGP 399
            <span className="text-gray-500 font-inter text-[1.30694rem] font-medium leading-[170%]">
              \ month
            </span>
          </p>
          <PlanButton
            text="Subscribe Now"
            className="mt-6 rounded-[1.75rem] bg-[#6161FF] py-2 px-6 text-white font-inter text-md font-[400] leading-[136%] me-8"
          />
          <ul className="text-start mt-8 mb-8">
            <PlanFeature text="All features of Standard Plan" />
            <PlanFeature text="Unlimited search per day" />
            <PlanFeature text="Unlimited Categories in Board" />
            <PlanFeature text="Create Pins Collection Dedicated account manager for support and onboarding Pre-negotiated discounted rates with some service providers" />
            <PlanFeature text="Invite your service provider " />
            <PlanFeature text="Collaborate with your service provider through shared projects and tasks" />
          </ul>
        </div>
      </div>
    </div>
  );
}
