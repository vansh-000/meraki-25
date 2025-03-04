const Card = () => {
  return (
    <div className="relative h-full w-full flex">
      <div className="md:w-8/15 w-full h-full backdrop-blur-md bg-black/20 md:bg-black/70 md:backdrop-blur-lg absolute left-0 top-0"></div>
      <div className="absolute bottom-0 left-8/15 h-full flex">
        <div className="hidden md:block w-[90px] h-[200px] bg-black/70 backdrop-blur-lg absolute top-0 clip-slant-right rounded-r-lg border-[#6A6D73]/40"></div>
        <div className="hidden md:block w-[90px] h-[200px] bg-black/70 backdrop-blur-lg absolute bottom-0 clip-slant-top rounded-r-lg border-[#6A6D73]/40"></div>
      </div>
    </div>
  );
};

export default Card;
