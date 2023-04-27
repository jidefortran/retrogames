import React from 'react'
import {Hero} from "./components/Hero"
import {useTitle} from "../../hooks/useTitle"
import {FeaturedProducts} from "./components/FeaturedProducts"
import { Testimonial } from "../Home/components/Testimonial";
import {Faq} from "../Home/components/Faq"
export const Homepage = () => {
  useTitle("Access our Retro Gamnes")
  return (
    <main>
      <Hero />
      <FeaturedProducts />
<Testimonial />
<Faq />
    </main>
  )
}
