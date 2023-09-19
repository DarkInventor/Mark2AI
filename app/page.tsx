// import Image from "next/image";
// // import 'flowbite';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by&nbsp;
//           <code className="font-mono font-bold">Searching Here</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://twitter.com/kathanmehtaa"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {/* By{' '}Kathan Mehta */}
//             <span className="hover:text-blue-500 dark:hover:text-blue-300">
//               By Kathan Mehta
//             </span>
//             {/* <span className="hover:bg-blue-200 hover:dark:bg-blue-700 rounded-lg p-2" /> */}

//             <Image
//               src="/twitter.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={25}
//               height={10}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         {/* <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div> */}
//       </div>

//       {/* <Image className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="/next.svg" alt="image description"  width={180}
//           height={37}/> */}

//       <div className="mt-4 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols lg:text-left">
//         <a
//           // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             {/* Docs{' '} */}
//             Search
//             {/* Search Code Tailwind  */}
//             <form>
//               <label
//                 htmlFor="default-search"
//                 className="mb-2 mt-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
//               >
//                 Search
//               </label>
//               <div className="relative">
//                 <div className="mb-1 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                         </svg> */}
//                   <Image
//                     src="/linkedin.svg" // Path to your LinkedIn SVG file in the public directory
//                     width={18} // Adjust the width as needed
//                     height={18} // Adjust the height as needed
//                     alt="LinkedIn Logo"
//                     className="text-gray-500 dark:text-gray-400" // Add any additional classes or styles as needed
//                   />
//                 </div>
//                 <input
//                   type="search"
//                   id="default-search"
//                   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
//                   placeholder="Paste the group member link here"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//             <span className="mt-5 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[50ch] text-lg opacity-50`}>
//             Paste the Link and Click Search to start sending DMs to first 100
//             members of that group
//           </p>
//         </a>
//       </div>

//       <p className="mt-5 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//         dont know how to find link ?&nbsp;
//         <code className="font-mono font-bold">Follow This</code>
//       </p>
//       <div className="mt-10 grid grid-cols-2 gap-2">
//         <div>
//           <Image
//             className="h-auto max-w-full rounded-lg"
//             src="/ss1.png"
//             width={380}
//             height={157}
//             alt=""
//           />
//         </div>
//         <div>
//           <Image
//             className="h-auto max-w-full rounded-lg"
//             src="/ss2.png"
//             width={480}
//             height={157}
//             alt=""
//           />
//         </div>

//         {/* <div>
//             <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" width={180} height={37} alt="" />
//         </div> */}
//         {/* </div> */}
//       </div>
//       <div className="grid grid-cols gap-2">
//         <div>
//           <Image
//             className="mt-10 h-auto max-w-full rounded-lg"
//             src="/ss3.png"
//             width={580}
//             height={50}
//             alt=""
//           />
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";
import Image from "next/image";
import React, { useState } from 'react';
// const { spawn } = require('child_process'); 
// import 'flowbite';

export default function Home() {

  const [searchInput, setSearchInput] = useState('');

  // Step 3: Add an event handler for the form submission
  const linkedindm = async (url: string) => {
    try {
      if (!url) {
        console.error('LinkedIn URL not provided');
        return;
      }

      const response = await fetch(`/api/linkedindm?url=${url}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error('Error sending LinkedIn message');
      }
    } catch (error) {
      console.error('Error sending LinkedIn message:', error);
    }
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   linkedindm(searchInput); // Pass the LinkedIn URL to the linkedindm function
  // };
  
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    linkedindm(searchInput); // Pass the LinkedIn URL to the linkedindm function
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by&nbsp;
          <code className="font-mono font-bold">Searching Here</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://twitter.com/kathanmehtaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{' '}Kathan Mehta */}
            <span className="hover:text-blue-500 dark:hover:text-blue-300">
              By Kathan Mehta
            </span>
            {/* <span className="hover:bg-blue-200 hover:dark:bg-blue-700 rounded-lg p-2" /> */}

            <Image
              src="/twitter.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={25}
              height={10}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      </div>

      {/* <Image className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="/next.svg" alt="image description"  width={180}
          height={37}/> */}

      <div className="mt-4 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols lg:text-left">
        <a
          // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {/* Docs{' '} */}
            Search
            {/* Search Code Tailwind  */}
            <form onSubmit={handleFormSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 mt-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="mb-1 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg> */}
                  <Image
                    src="/linkedin.svg" // Path to your LinkedIn SVG file in the public directory
                    width={18} // Adjust the width as needed
                    height={18} // Adjust the height as needed
                    alt="LinkedIn Logo"
                    className="text-gray-500 dark:text-gray-400" // Add any additional classes or styles as needed
                  />
                </div>
                <input
                  type="search"
                  id="linkedin-url" // Add id attribute
                  name="linkedin-url" // Add name attribute
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10"
                  placeholder="Paste the group member link here"
                  required
                  value={searchInput}
                  // Update the input value when it changes
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
            <span className="mt-5 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ➡️
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-lg opacity-50`}>
            Paste the Link and Click Search to start sending DMs to first 200
            members of that group
          </p>
        </a>
      </div>

      <p className="mt-5 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        dont know how to find link ?&nbsp;
        <code className="font-mono font-bold">Follow This</code>
      </p>
      <div className="mt-10 grid grid-cols-2 gap-2">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/ss1.png"
            width={380}
            height={157}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/ss2.png"
            width={480}
            height={157}
            alt=""
          />
        </div>

        {/* <div>
            <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" width={180} height={37} alt="" />
        </div> */}
        {/* </div> */}
      </div>
      <div className="grid grid-cols gap-2">
        <div>
          <Image
            className="mt-10 h-auto max-w-full rounded-lg"
            src="/ss3.png"
            width={580}
            height={50}
            alt=""
          />
        </div>
      </div>
    </main>
  );
      }