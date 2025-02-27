import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { assets } from '../assets/assets'
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        <Icons.avatar1 />
        <Icons.avatar2 />
        <Icons.avatar3 />
        <Icons.avatar4/>
        <Icons.avatar5 />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
      <Icons.avatar1 />
        <Icons.avatar2 />
        <Icons.avatar3 />
        <Icons.avatar4/>
        <Icons.avatar5/>
      </OrbitingCircles>
     
      
    </div>
  );
}

const Icons = {
  avatar1: () => (
    <img src={assets.Avatar1} alt="" />
  ),
  avatar2: () => (
    <img src={assets.Avatar2} alt="" />
  ),
  avatar3: () => (
    <img src={assets.Avatar3} alt="" />
  ),
  avatar4: () => (
    <img src={assets.Avatar4} alt="" />
  ),
  avatar5: () => (
    <img src={assets.Avatar5} alt="" />
  ),
};
