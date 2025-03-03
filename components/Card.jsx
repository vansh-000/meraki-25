const Card = () => {
    return (
      <div className="relative h-full w-full flex">
        <div className="md:w-9/15 w-full h-full bg-black/60 backdrop-blur-md absolute left-0 top-0"></div>
        <div className="absolute bottom-0 left-9/15 h-full flex">
          <div className="hidden md:block w-[90px] h-[200px] bg-black/60 backdrop-blur-md absolute top-0 clip-slant-right rounded-r-lg shadow-lg border-r-2"></div>
          <div className="hidden md:block w-[90px] h-[200px] bg-black/60 backdrop-blur-md absolute bottom-0 clip-slant-top rounded-r-lg shadow-lg border-r-2"></div>
        </div>
      </div>
    );
  };
  
  export default Card;