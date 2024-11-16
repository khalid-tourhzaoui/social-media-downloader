import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function VideoCard({
  data,
  format,
  platformIcon,
  platformName,
  platformUrl,
  downloadUrl,
  channel_url,
  platformImg
}) {
  return (
    <motion.div
      className="relative backdrop-blur-[3px] group flex flex-col md:flex-row md:items-start ring-1 ring-current space-y-2 md:space-y-0
       md:space-x-4 p-3 rounded-2xl shadow-shad transition-shadow duration-300 hover:shadow-primary1 hover:ring-primary2 hover:ring-2 
       text-white md:w-4/5 sm:w-3/4"
      initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      {/* Miniature */}
      <div className="w-full md:w-1/3 border-solid border-2 border-white rounded-lg hidden md:block">
        <a href={platformUrl} target="_blank" rel="noopener noreferrer">
        <img
        src={platformImg}
        alt={data.title || "Default image"}
        className="w-40 mx-auto rounded-lg shadow-lg "
        style={data.source === "tiktok" ? { width: "55%", height: "100%" } : undefined}
        />
        </a>
      </div>
      {/* Icône de la plateforme */}
      <div className="absolute top-3 right-5 text-xl text-red group-hover:shadow-primary3 hidden md:block">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          {platformIcon}
        </a>
      </div>
      {/* Contenu texte */}
      <div className="flex flex-col justify-between w-full md:w-2/3 space-y-2">
        <div className="font-bold text-md group-hover:scale-105 group-hover:ml-2 transition-all">
          {data.title.length > 40
            ? data.title.substring(0, 45) + "..."
            : data.title}
        </div>
        <div className="text-md text-primary2 font-medium">
          <a
            href={
              data.hosting === "youtube"
                ? channel_url
                : data.source === "x"
                ? `https://x.com/${data.author}`
                : data.source === "instagram"
                ? `https://instagram.com/${data.author}`
                : data.hosting === "tiktok"
                ? platformUrl
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {platformName} : {data.author || data.channel}
          </a>
        </div>
        <div className="text-sm text-purple-100">
          Format : {format.format || format.quality || format.type}
        </div>
        <div className="text-xl text-primary1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-semibold uppercase shadow-md shadow-primary3 relative inline-block overflow-hidden rounded 
              bg-primary1 ring-1 ring-white hover:ring-0 px-4 py-1 text-lg text-slate-800 hover:text-white focus:outline-none 
              focus:ring active:bg-indigo-600 active:text-white hover:scale-105 transition-all duration-500 hover:shadow-shad 
              hover:shadow-primary1"
              aria-label={`Download format ${format.format || format.quality}`}
            >
              <FaDownload className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default VideoCard;
