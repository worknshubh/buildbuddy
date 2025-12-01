import "../global.css";

function FooterBar() {
  console.log("FooterBar mounted");
  return (
    <>
      <div className="bg-[#1a1a1a] h-[350px] p-20 ">
        <div className="flex flex-row">
          <h2 className="text-5xl text-white">Build</h2>
          <h2 className="text-5xl text-[#EFA61F]">Buddy</h2>
        </div>

        <div className="flex flex-row mt-3">
          <img src="public/images/fb.png" alt="" className="w-[30px] mx-2" />
          <img src="public/images/ins.png" alt="" className="w-[30px] mx-2" />
          <img src="public/images/x.png" alt="" className="w-[30px] mx-2" />
          <img src="public/images/ln.png" alt="" className="w-[30px] mx-2" />
        </div>
        <div className="flex flex-row justify-end">
          <div className="flex flex-col mx-8">
            <h4 className="text-white font-light mb-2">Our Apps</h4>
            <p className="text-white my-1">SumoMom</p>
            <p className="text-white my-1">Salonify</p>
            <p className="text-white my-1">Festify</p>
          </div>
          <div className="flex flex-col mx-8">
            <h4 className="text-white mb-2 font-light">Company</h4>
            <p className="text-white my-1">About</p>
            <p className="text-white my-1">Contact Us</p>
            <p className="text-white my-1">Carrers</p>
            <p className="text-white my-1">Support</p>
          </div>
          <div className="flex flex-col mx-8">
            <h4 className="text-white mb-2 font-light">Legal</h4>
            <p className="text-white my-1">Guidelines</p>
            <p className="text-white my-1">Manage Cookies</p>
            <p className="text-white my-1">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBar;
