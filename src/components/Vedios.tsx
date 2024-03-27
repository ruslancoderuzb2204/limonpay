const VideoGrid: React.FC = () => {
  return (
    <div className="container mx-auto text-white my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 mx-5">
      <div className="rounded-xl overflow-hidden mb-2.5 md:mb-0 md:mr-2.5">
        <iframe
          className="w-full h-[300px] md:h-[400px]"
          src="https://www.youtube.com/embed/mnKQa3ow4CY?si=YEnybKI-IyNEY5IX"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="rounded-xl overflow-hidden">
        <iframe
          className="w-full h-[300px] md:h-[400px]"
          src="https://www.youtube.com/embed/kGD-hYg4ITY?si=vabUGlIQT9K5MW5k"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default VideoGrid;
