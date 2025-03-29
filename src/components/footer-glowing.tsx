import React from 'react'
import glowingEffect from "~/assets/footer-glowing.png"
import Image from "next/image"


const FooterGlowing = () => {
  return (
    <div className='absolute bottom-0 w-full overflow-hidden -z-10'>
        <Image
            src={glowingEffect}
            alt="thumbnail"
            width="2593"
            height="2542"
            className="w-full h-full"
            loading="eager"
          />
    </div>
  )
}

export default FooterGlowing