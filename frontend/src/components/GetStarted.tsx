import { OrbitingCircles } from "./magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import { TextAnimate } from "./magicui/text-animate";

function GetStarted() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full px-14">
      <h1 className="text-2xl md:text-3xl font-extrabold text-center leading-tight drop-shadow-lg">
        <TextAnimate animation="blurInUp" by="character" once>
        Stay connected anytime, anywhere  with ease!
        </TextAnimate>
      </h1>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles />
        <OrbitingCirclesDemo />
      </div>
    </div>
  );
}

export default GetStarted;