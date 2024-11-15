import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
/*-----------------------------------*/
function DataResult({ data }) {
  if (!data && !data.formats) {
    return (
      <div className="text-red-500">No data available or invalid format</div>
    );
  }
  console.log(data);
  const currentURL = window.location.href;
  return (
    <>
      {/*---------------------------------Condition pour YouTube---------------------------------*/}
      {data.hosting === "youtube" &&
        currentURL.includes("/youtube") &&
        data.formats?.map((ele, index) => (
          <motion.div
            key={index}
            className="relative backdrop-blur-[3px] group  flex flex-col md:flex-row  md:items-start ring-1 ring-current
                 space-y-4 md:space-y-0 md:space-x-4 p-3 rounded-2xl shadow-shad transition-shadow duration-300 hover:shadow-primary1
                  hover:ring-primary2  hover:ring-2 text-white md:w-4/5 sm:w-3/4 "
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Miniature avec lien */}
            <div className="w-full md:w-1/3 hidden md:block">
              <a
                href={`https://www.youtube.com/watch?v=${data.shortcode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={data.thumb}
                  alt={data.title}
                  className="w-2/3 sm:w-1/2 md:w-full mx-auto rounded-lg shadow-lg hover:shadow-primary2"
                />
              </a>
            </div>
            <div className="absolute top-3 right-5 text-xl text-red group-hover:shadow-primary3 hidden md:block">
              <a
                href={ele.download_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl" />
              </a>
            </div>

            {/* Contenu texte : Titre, Chaîne, Formats */}
            <div className="flex flex-col justify-between w-full md:w-2/3 space-y-4">
              {/* Titre de la vidéo */}
              <div className="font-bold text-md group-hover:scale-105 group-hover:ml-2 transition-all">
                {data.title}
              </div>

              {/* Nom de la chaîne */}
              <div className="text-md text-primary2 font-medium">
                <a
                  href={data.channel_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chaîne : {data.channel}
                </a>
              </div>

              {/* Format disponible */}
              <div className="text-sm text-purple-100">
                Format : {ele.format}
              </div>

              {/* Bouton de téléchargement */}
              <div className="text-xl text-primary1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <Link
                    className={`group font-semibold uppercase shadow-md shadow-primary3 relative inline-block overflow-hidden 
              rounded bg-primary1 ring-1 ring-white hover:ring-0 px-4 py-1 text-lg text-slate-800 hover:text-white 
              focus:outline-none focus:ring active:bg-indigo-600 active:text-white hover:scale-105 transition-all 
              duration-500 hover:shadow-shad hover:shadow-primary1`}
                    to={ele.download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download format ${ele.format}`}
                  >
                    <FaDownload className="text-2xl" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
    </>
  );
}

export default DataResult;
