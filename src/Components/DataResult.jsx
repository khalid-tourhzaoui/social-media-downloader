
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
/*-----------------------------------*/
// {
//     "error": false,
//     "hosting": "youtube",
//     "shortcode": "SJtSbkKVyr0",
//     "title": "سورة الكهف ياسر الدوسري",
//     "channel": "قرآن كريم",
//     "channel_url": "https://www.youtube.com/@%D9%82%D8%B1%D8%A2%D9%86%D9%83%D8%B1%D9%8A%D9%85-%D9%849%D8%AD",
//     "thumb": "https://i.ytimg.com/vi/SJtSbkKVyr0/hqdefault.jpg",
//     "formats": [
//         {
//             "format": "1080p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=1080p"
//         },
//         {
//             "format": "720p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=720p"
//         },
//         {
//             "format": "480p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=480p"
//         },
//         {
//             "format": "360p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=360p"
//         },
//         {
//             "format": "240p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=240p"
//         },
//         {
//             "format": "144p",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=144p"
//         },
//         {
//             "format": "mp3",
//             "download_url": "https://api.fastsaverapi.com/get-file?uid=VWj57ucw9DuyGuAbgbkYv2&format=mp3"
//         }
//     ]
// }
/*--------------------------------------------------------------------*/
// import React from "react";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// function DataResult({ data }) {
//   if (!data || !Array.isArray(data.formats)) {
//     return <div className="text-red-500">No data available or invalid format</div>;
//   }

//   return (
//     <div className="space-y-4">
//       {data.formats.map((ele, index) => (
//         <motion.div
//           key={index}
//           className="relative backdrop-blur-[3px] group w-full flex justify-center flex-col ring-1 ring-current  
//                       space-y-2 p-8 rounded-2xl shadow-shad transition-shadow duration-300 hover:shadow-primary1 hover:ring-primary4 
//                       hover:ring-2 text-white md:w-4/5"
//           initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           <div className="font-bold text-xl group-hover:scale-105 group-hover:ml-2 transition-all">
//             {data.title}
//           </div>
//           <div className="text-sm md:w-11/12 text-purple-100 group-hover:scale-105 group-hover:ml-2 transition-all duration-300">
//             {ele.format}
//           </div>
//           <div className="absolute top-3 right-5 text-xl text-primary1 group-hover:shadow-primary3">
//             <a
//               href={ele.download_url}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={`Download ${ele.format}`}
//             >
//               <FaDownload className="text-xl" />
//             </a>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// export default DataResult;
/*-----------------------------------*/
/*---------------------------*/
function DataResult({ data }) {
  if (!data || !data.formats) {
    return <div className="text-red-500">No data available or invalid format</div>;
  }
  const currentURL = window.location.href; 
  return (
    <>
      {/* Condition pour YouTube */}
      {data.hosting === "youtube" && currentURL.includes("/youtube") && 
        data.formats.map((ele, index) => (
          <motion.div
            key={index}
            className="relative backdrop-blur-[3px] group w-full flex justify-center flex-col ring-1 ring-current  
                        space-y-4 p-8 rounded-2xl shadow-shad transition-shadow duration-300 hover:shadow-primary1 hover:ring-primary4 
                        hover:ring-2 text-white md:w-4/5"
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="font-bold text-xl group-hover:scale-105 group-hover:ml-2 transition-all">
              {data.title}
            </div>
            <div className="text-sm md:w-11/12 text-purple-100 group-hover:scale-105 group-hover:ml-2 transition-all duration-300">
              {ele.format}
            </div>
            <div className="absolute top-3 right-5 text-xl text-primary1 group-hover:shadow-primary3">
              <a href={ele.download_url} target="_blank" rel="noopener noreferrer">
                <FaDownload className="text-xl" />
              </a>
            </div>
          </motion.div>
        ))}

      {/* Condition pour Instagram */}
      {data.hosting === "instagram" && (
        <div className="text-center text-white">
          <p>Currently displaying TikTok content...</p>
        </div>
      )}

      {/* Ajout d'autres conditions pour Instagram ou Twitter si nécessaire */}
    </>
  );
}

export default DataResult;
