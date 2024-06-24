import { useEffect, useRef, useState } from "react";
import { Spinner } from "keep-react";
import sound from "./components/click.wav";
import "./App.css";
import NavBar from "./components/Navbar";
import { Play } from "phosphor-react";

function App() {
   const [htmlCode, setHtmlCode] = useState("");
   const [cssCode, setCssCode] = useState("");
   const [JsCode, setJsCode] = useState("");
   const [spiner, setSpiner] = useState(false);

   const audioRef = useRef(new Audio(sound));

   const handleOutput = (e) => {
      setSpiner(true);
      audioRef.current.play();
      const iframe = document.getElementById("outpute");
      iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

      iframe.contentWindow.eval(JsCode);

      setSpiner(false);
   };
   useEffect(() => {
      const audio = audioRef.current;

      // Clean up function to pause the audio when the component unmounts
      return () => {
         audio.pause();
         audio.currentTime = 0;
      };
   }, []);

   return (
      <div className="  bg-slate-900  ">
         <NavBar />
         <div className=" font-robot xl:flex-row 2xl:flex-row w-full p-5 sm:flex sm:flex-col">
            <div className="left basis-2/4 p-3">
               {/* Html */}
               <div className=" inputebox flex flex-col items-center bg-emerald-950">
                  <label className=" text-4xl text-green-200 ">HTML</label>
                  <textarea
                     className=" h-40 w-full bg-sky-950 text-white font-oswald resize-none overflow-visible p-2  "
                     name="html"
                     placeholder="Write Your HTML Code Here"
                     onChange={(e) => setHtmlCode(e.target.value)}></textarea>
               </div>
               {/* Css */}
               <div className=" inputebox flex flex-col items-center bg-emerald-950">
                  <label className="text-4xl text-green-200">CSS</label>
                  <textarea
                     name="css "
                     className=" h-40 w-full bg-sky-950 text-white font-oswald resize-none overflow-visible p-2"
                     placeholder="Write Your CSS Code Here"
                     onChange={(e) => setCssCode(e.target.value)}></textarea>
               </div>

               {/* Javascript */}
               <div className=" inputebox flex flex-col items-center bg-emerald-950">
                  <label className="text-4xl text-green-200">javascript</label>
                  <textarea
                     name="javascript"
                     className=" h-40 w-full bg-sky-950 text-white font-latin resize-none overflow-visible p-2"
                     placeholder="Write Your Javascript Code Here"
                     onChange={(e) => setJsCode(e.target.value)}></textarea>
               </div>
            </div>
            <div className=" bg-green-100 w-1"></div>
            <div className="right  basis-2/4 p-3 text-center">
               {/* Outpute */}
               <div className=" flex flex-col justify-center items-center">
                  {spiner ? (
                     <Spinner color="info" size="lg" />
                  ) : (
                     <button
                        className=" flex bg-blue-600 h-9  p-2 text-slate-300 border rounded-xl hover:bg-blue-800 font-normal hover:text-green-700 duration-200"
                        onClick={handleOutput}>
                        Run Code {<Play size="18" />}
                     </button>
                  )}

                  <iframe
                     id="outpute"
                     className=" border-4 border-emerald-950 w-full  m-4 ml-8 bg-amber-100"
                     style={{ height: "80vh" }}></iframe>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
