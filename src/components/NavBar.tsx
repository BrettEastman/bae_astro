// import { useState } from "react";
// import instagramIcon from "../icons/instagram-svgrepo-com.svg";
// import githubIcon from "../icons/github-142-svgrepo-com.svg";
// import linkedInIcon from "../icons/linkedin-rounded-svgrepo-com.svg";
// import closeIcon from "../icons/close-md-svgrepo-com.svg";
// import hamburgerIcon from "../icons/menu-svgrepo-com.svg";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNav = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <nav className="w-full h-24 shadow-xl bg-white font-raleway">
//         <div className="flex justify-between items-center h-full w-full px-4 2xl: px-16">
//           <a href={"/"} className="ml-10 uppercase hover:border-b text-xl">
//             Home
//           </a>
//           <div className="hidden sm:flex">
//             <ul className="hidden sm:flex">
//               <a href={"/about"}>
//                 <li className="ml-10 uppercase hover:border-b text-2xl">
//                   About
//                 </li>
//               </a>
//               <a href={"/selected_works"}>
//                 <li className="ml-10 uppercase hover:border-b text-2xl">
//                   Selected Works
//                 </li>
//               </a>
//               <a href={"/production"}>
//                 <li className="ml-10 uppercase hover:border-b text-2xl">
//                   Production
//                 </li>
//               </a>
//               <a href={"/sound_design"}>
//                 <li className="ml-10 uppercase hover:border-b text-2xl">
//                   Sound Design
//                 </li>
//               </a>
//             </ul>
//           </div>
//           <button
//             onClick={handleNav}
//             className="sm:hidden cursor-pointer pl-24"
//           >
//             <img src={(hamburgerIcon as any).src} alt="" width={25}></img>
//           </button>
//         </div>
//         <div
//           className={
//             menuOpen
//               ? "fixed left-0 top-0 w-[65%] sm-hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-400"
//               : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
//           }
//         >
//           <div className="flex w-full items-center justify-end">
//             <div onClick={handleNav} className="cursor-pointer">
//               <img
//                 src={(closeIcon as any).src}
//                 alt=""
//                 width={30}
//                 className="cursor-pointer"
//               ></img>
//             </div>
//           </div>
//           <div className="flex-col py-4">
//             <ul>
//               <a href={"/about"}>
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   About
//                 </li>
//               </a>
//               <a href={"/selected_works"}>
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Selected Works
//                 </li>
//               </a>
//               <a href={"/production"}>
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Production
//                 </li>
//               </a>
//               <a href={"/sound_design"}>
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Sound Design
//                 </li>
//               </a>
//             </ul>
//           </div>
//           <div className="flex flex-row justify-around pt-10 items-center">
//             <a href="https://github.com/BrettEastman" target="_blank">
//               <img
//                 src={(githubIcon as any).src}
//                 alt="Github"
//                 width={30}
//                 className="cursor-pointer"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/brett-austin-eastman/"
//               target="_blank"
//             >
//               <img
//                 src={(linkedInIcon as any).src}
//                 alt="LinkedIn"
//                 width={30}
//                 className="cursor-pointer"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com/brettaustineastman/"
//               target="_blank"
//             >
//               <img
//                 src={(instagramIcon as any).src}
//                 alt="Instagram"
//                 width={30}
//                 className="cursor-pointer"
//               />
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
