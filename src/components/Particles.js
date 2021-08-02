import React from "react";
import { Particles as TsParticles } from "react-tsparticles";
import configuration from "../particles.json";


const Particles = () => {

  return (
    <TsParticles options={configuration}/>
  )
}

export default Particles;
