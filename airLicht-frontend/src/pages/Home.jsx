import React from "react";
import HighlightText from "../components/common/HighlightText";
import { useCases } from "../data/use-cases";
import { keyFunctions } from "../data/key-functions";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { Canvas} from '@react-three/fiber'
import { OrbitControls, useGLTF} from '@react-three/drei'

function AirplaneShape() {
  const { scene } = useGLTF("./a380_with_a380plus_winglet.glb");
  return (
    <mesh>
      <ambientLight intensity={1} color="white" />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <spotLight intensity={1} angle={0.3} penumbra={1} position={[5, 15, 10]} />
      <primitive
        object={scene}
        scale={0.005}
        position={[0, 0, -0.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </mesh>
  );
}

function Airplane() {
  return (
    <Canvas frameloop="demand" camera={{ position: [700, 330, 500], fov: 2.5 }} style={{ width: '600px', height: '600px' }}>
      <AirplaneShape />
      <OrbitControls autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}

const Home = () => {
  return (
    <>
      {/* section 1 */}
      <div className="relative min-h-[calc(100vh-80px)] mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between md:justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row mt-5 gap-8 md:mt-0">
          <div className="md:w-[50%] flex flex-col gap-4 flex justify-left">
            <p className="text-[40px] font-bold text-richblack-25">
              <HighlightText></HighlightText>{" "}
              <HighlightText>
                <TypeAnimation
                  sequence={["Introducing AI in Aircraft Maintenance!", 1000, ""]}
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
              </HighlightText>
            </p>
            <p className="text-richblack-25 text-[18px]" align="justify">
              The primary goal of this project is to enhance aircraft
              maintenance processes by creating a web application that utilizes
              advanced imaging, analysis, and machine learning techniques to
              detect and assess damage on aircraft surfaces and identify faulty
              wiring.
            </p>
          </div>
          <div className="color-round-grad opacity-60 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <Airplane/>
        </div>          
        </div>
      </div>

      {/* section 2 */}
      <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between md:justify-center mt-5 mb-10">
        <p className="text-[40px] font-bold text-richblack-25 mb-4">
          <HighlightText>Use Cases</HighlightText>
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 mt-2">
          <div className="color-round-grad1 opacity-20 absolute top-0 left-0 w-[60%] h-[60%]"></div>
          {useCases.map((useCase, index) => (
            <div
            key={index}
            className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 rounded-md cursor-pointer hover:bg-opacity-40 p-4 rounded-md transform transition-transform hover:scale-105"
            style={{ backdropFilter: "blur(20px)" }}
          >
              <p className="text-[22px] font-bold text-richblack-5">
                {useCase.title}
              </p>
              <p className="text-[18px] text-richblack-25">
                {useCase.description}
              </p>
            </div>
          ))}
          <div className="color-round-grad1 opacity-60 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        </div>
      </div>

      {/* section 2 */}
      <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between md:justify-center mt-10 mb-5">
        <p className="text-[40px] font-bold text-richblack-25 mb-4">
          <HighlightText>Key Functionalities</HighlightText>
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 mt-2">
          <div className="color-round-grad opacity-20 absolute top-0 left-0 w-[60%] h-[60%]"></div>
          {keyFunctions.map((keyFunction, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md cursor-pointer hover:bg-opacity-40 transform transition-transform hover:scale-105"
            >
              <p className="text-[22px] font-bold text-richblack-5">
                {keyFunction.title}
              </p>
              {keyFunction.description.map((desc, index) => (
                <p key={index} className="text-[18px] text-richblack-25">
                  {desc}
                </p>
              ))}
            </div>
          ))}
          <div className="color-round-grad opacity-50 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
