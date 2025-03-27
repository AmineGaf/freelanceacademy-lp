import React from 'react'
import glowingEffect from "@/assets/nav-glowing.webp"
import Image from "next/image"
const NavGlowing = () => {
  return (
    <div className='absolute -top-[65vw] w-full overflow-hidden -z-10'>
        <Image
            src={glowingEffect}
            alt="thumbnail"
            width="2593"
            height="2542"
            className="w-full h-full scale-[2]"
            loading="eager"
          />
    </div>
  )
}

export default NavGlowing