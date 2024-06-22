import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white ">
      {/* <hr className="border-4 border-gray-600" /> */}
      <div className="px-10 py-10">Questions? Call 000-800-919-1694</div>
      <div className="flex justify-between px-10">
        <div className=" ">
          <ul>
            <li className="py-5">FAQ</li>
            <li className="py-5">Investor Relations</li>
            <li className="py-5">Privacy</li>
            <li className="py-5">Speed Test</li>
          </ul>
        </div>
        <div className=" ">
          <ul>
            <li className="py-5">Help Centre</li>
            <li className="py-5">Media Center</li>
            <li className="py-5">Cookie Preferences</li>
            <li className="py-5">Legal Notices</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="py-5">Account</li>
            <li className="py-5">Ways to Watch</li>
            <li className="py-5">Coporate Information</li>
            <li className="py-5">Only on Netflix</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="py-5">Media Center</li>
            <li className="py-5">Terms of use</li>
            <li className="py-5">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
