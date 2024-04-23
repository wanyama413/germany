import React from "react";

export default function Footer() {
  return (
    <footer className="p-12">
      <section className="foot mb-5">
        <div>
          <address>
            Sternschnuppen GmbH <br />
            Postfach 125 <br />
            5707 Seengen
          </address>
          <p>Tel: 062 777 45 29</p>
          <p>E-MAIL: info@stellensuche.ch</p>
        </div>
        <div>
          <address>
            PAWECO GmbH <br />
            Bösch 63 <br />
            6331 Hünenberg
          </address>
          <p>Tel: 041 552 01 50</p>
          <p>E-MAIL: info@paweco.ch</p>
          <p>Internet:www.paweco.ch</p>
        </div>
        <div>
          <p className="mb-3 font-bold">Navigation</p>
          <div>
            <ul>
              <li>Newsletter</li>
              <li>Impressum</li>
              <li>Datenschutzerklärung</li>
              <li>AGB</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="mb-3 font-bold">Get In Touch</p>
          <div className="flex justify-between items-center ">
            <div className="w-[30px]">
              <img className="cursor-pointer" src="/fb.svg" alt="" srcset="" />
            </div>
            <div className="w-[30px]">
              <img
                className="cursor-pointer"
                src="/linkedin.svg"
                alt=""
                srcset=""
              />
            </div>
            <div className="w-[30px]">
              <img className="cursor-pointer" src="/x.svg" alt="" />
            </div>
            <div className="w-[30px]">
              <img className="cursor-pointer" src="/tiktok.svg" alt="" />
            </div>
          </div>
          <div className="mt-[6rem] flex">
            <div className="shadow-boxx border-2 rounded-[40px] pb-[10px] pt-[10px] pl-[20px] pr-[20px]">
              <input
                className="border-none outline-none"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="pl-3 flex items-center">
              <button className=" bg-black text-white p-[10px] pl-[20px] pr-[20px] rounded-[40px] ">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center border-t-2 pt-5 pb-8">
        &copy;{new Date().getFullYear()} Stellensuche, All rights reserved.
      </section>
    </footer>
  );
}
