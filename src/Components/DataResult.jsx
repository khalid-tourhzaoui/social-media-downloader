import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";
import VideoCard from "./VideoCard";
import TiktokImg from "../assets/tiktok.svg";

function DataResult({ data }) {
  if (!data && (!data.formats && !data.medias)) {
    return <div className="text-red-500">No data available or invalid format</div>;
  }

  const currentURL = window.location.href;

  // Détermine la plateforme
  const isYouTube = data.hosting === "youtube" && currentURL.includes("/youtube");
  const isInstagram = data.source === "instagram" && currentURL.includes("/instagram");
  const isTikTok = data.source === "tiktok" && currentURL.includes("/tiktok");
  const isTwitter = data.source === "x" && currentURL.includes("/twitter");
  const isFacebook = data.source ==="facebook" && currentURL.includes("/facebook");

  return (
    <>
      {isYouTube &&
        data.formats?.map((format, index) => (
          <VideoCard
            key={index}
            data={data}
            format={format}
            platformIcon={<FaYoutube className="text-3xl" />}
            platformName="Chaîne"
            platformUrl={`https://www.youtube.com/watch?v=${data.shortcode}`}
            downloadUrl={format.download_url}
            channel_url={data.channel_url}
          />
        ))}

      {isInstagram && (
        <VideoCard
          data={data}
          format={data.medias[0]}
          platformIcon={<FaInstagram className="text-3xl" />}
          platformName="Compte"
          platformUrl={data.url}
          downloadUrl={data.medias[0].url}
        />
      )}

      {isTikTok && (
        <VideoCard
          data={data}
          format={data.medias[0]}
          platformIcon={<FaTiktok className="text-3xl" />}
          platformName="Compte"
          platformImg={TiktokImg}
          platformUrl={data.shortcode}
          downloadUrl={data.download_url}
        />
      )}
      {isTwitter && (
        <VideoCard
          data={data}
          format={data.medias[0]}
          platformIcon={<FaTwitter className="text-3xl" />}
          platformName="Compte"
          platformUrl={data.url}
          downloadUrl={data.medias[0].url}
        />
      )}
      {isFacebook && (
        <VideoCard
          data={data}
          format={data.medias[0]}
          platformIcon={<FaFacebook className="text-3xl" />}
          platformName="Compte"
          platformUrl={data.url}
          downloadUrl={data.medias[0].url}
        />
      )}

    </>
  );
}

export default DataResult;
