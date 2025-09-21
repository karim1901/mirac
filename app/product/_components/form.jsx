'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { RiCheckboxCircleFill } from "react-icons/ri"
import Loading from "@/app/loading"

const Form = ({qty,product}) => {
  const [info, setInfo] = useState({
    nameProduct:product,
    nameClient: "",
    phone: "",
    city: "",
    address: "",
    quantity:qty
  })




  const [load , setLoad ] = useState(false)
  const [empys, setEmptys] = useState(false)
  const router = useRouter()

  const selle = async() => {
    setLoad(true)
    if (info.nameClient =="" || info.phone =="" || info.city =="" || info.address =="" ) {
      setEmptys(true)
    }else{

      await axios.post("/api/admin/order",{...info,qty}).then(()=>{
        router.push("/successfully")

      }).catch(error=>{
        router.push("/error")
        
      })


    }

    setLoad(false)
  }


  useEffect(() => {
    // TikTok Pixel Code
    (function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = (w[t] = w[t] || []);
      ttq.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
        "holdConsent",
        "revokeConsent",
        "grantConsent",
      ];
      ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      };
      for (var i = 0; i < ttq.methods.length; i++) {
        ttq.setAndDefer(ttq, ttq.methods[i]);
      }
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
          ttq.setAndDefer(e, ttq.methods[n]);
        }
        return e;
      };
      ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
          o = n && n.partner;
        ttq._i = ttq._i || {};
        ttq._i[e] = [];
        ttq._i[e]._u = r;
        ttq._t = ttq._t || {};
        ttq._t[e] = +new Date();
        ttq._o = ttq._o || {};
        ttq._o[e] = n || {};
        n = document.createElement("script");
        n.type = "text/javascript";
        n.async = !0;
        n.src = r + "?sdkid=" + e + "&lib=" + t;
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      };
      ttq.load("CU591VJC77UBK8D3KHP0");
      ttq.page();

    })(window, document, "ttq");


     // منع التكرار
     console.log("Starting Pixel Setup");

     if (!window.fbq) {
       console.log("window.fbq does NOT exist → Proceeding");
   
       (function (f, b, e, v, n, t, s) {
         console.log("Injecting Facebook Pixel script...");
         if (f.fbq) {
           console.log("fbq already exists inside IIFE → Stop");
           return;
         }
   
         console.log("Creating fbq function");
 
         n = f.fbq = function () {
           n.callMethod
             ? n.callMethod.apply(n, arguments)
             : n.queue.push(arguments);
         };
         if (!f._fbq) f._fbq = n;
         n.push = n;
         n.loaded = true;
         n.version = '2.0';
         n.queue = [];
         t = b.createElement(e);
         t.async = true;
         t.src = 'https://connect.facebook.net/en_US/fbevents.js';
         s = b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t, s);
       })(window, document, 'script');
 
       console.log(window.fbq)
 
       // استبدل بـ ID الخاص بك
       window.fbq('init', '1377712780201149'); // الرقم بين علامات اقتباس
       window.fbq('track', 'PageView');
       
     }

  }, []);

  return (
    <div className="mt-4" dir="rtl">
      { load && <div className="fixed w-full h-screen bg-white left-0 top-0 z-50">
        <div  className='w-full left-0  h-screen   flex justify-center items-center bg-[#ffffff18] '>
          <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              {/* <span className="sr-only">Loading...</span> */}
          </div>
        </div>
      </div>}
      <h1 className="font-semibold px-4 ">معلومات الزبون</h1>
      {empys && <p className="px-4 text-center text-red-500">يجب ملئ جميع الخانات</p>}
      <form className="flex flex-col gap-4 justify-center px-4 mt-4">

        <input type="text" placeholder="اسم" name="name" className="inputForm" value={info.nameClient} onChange={({ target }) => setInfo({ ...info, [target.name]: target.value })} />
        <input type="text" placeholder="رقم الهاتف" name="phone" className="inputForm" value={info.phone} onChange={({ target }) => setInfo({ ...info, [target.name]: target.value })} />
        <input type="text" placeholder="المدينة" name="city" className="inputForm" value={info.city} onChange={({ target }) => setInfo({ ...info, [target.name]: target.value })} />
        <input type="text" placeholder="العنوان" name="address" className="inputForm" value={info.address} onChange={({ target }) => setInfo({ ...info, [target.name]: target.value })} />
      </form>

      <div>
        <div className="flex p-4 items-center justify-between h-[5rem]  ">
          <button className="bg-primary py-2 w-full px-[2rem] text-white  rounded-full text-[1.3rem] font-semibold"  onClick={selle}>شراء</button>
        </div>
      </div>

    </div>

  )
}

export default Form
