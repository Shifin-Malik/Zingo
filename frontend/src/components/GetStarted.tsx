import { OrbitingCircles } from "./magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import { TextAnimate } from "./magicui/text-animate";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full px-4">
      <h1 className="text-xl md:text-3xl font-extrabold text-center leading-tight drop-shadow-lg">
        <TextAnimate animation="blurInUp" by="character" once>
        Stay connected anytime, anywhere  with ease!
        </TextAnimate>
      </h1>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles />
        <OrbitingCirclesDemo />
      </div>
     <Link to="/home">
     <Button className="bg-orange-400 hover:bg-orange-500 w-40 h-10">Get Started</Button>
     </Link>
    </div>
  );
}

export default GetStarted;