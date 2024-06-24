import Icon from "../assets/img/f-icon.png";

export default function NavBar() {
   return (
      <header className=" flex flex-row justify-center  text-white border-b bg-blue-900 ">
         <img className=" ml-12 w-10" src={Icon} alt="A3" />
         <div>
            <span className=" text-4xl font-bold  m-2 font-kodom text-sky-600 ">A3.Coder</span>
         </div>
      </header>
   );
}
