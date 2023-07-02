/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

 function Home() {
  const gltf = useLoader(GLTFLoader, './models/game_boy_advance_sp.glb')

  return (
    <>
      <div className="container">
        <div className="neon">Aura </div>
        <div className="flux">Pets </div>

        <button>Find your pet</button>
      </div>

      <div className="three-d-parent">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Canvas camera={{ position: [0, 0, 2], fov: 45 }} shadows>
            <directionalLight position={[3.3, 2.0, 4.4]} castShadow={true} />
            <pointLight position={[0, 2, 0]} intensity={1} color="#FF1493" />
            <primitive
              object={gltf.scene}
              position={[0, -0.45, 0]}
              rotation={[0, Math.PI * 1.72, 0]}
              children-0-castShadow={true}
              scale={[1.8, 1.8, 1.8]}
            />
          </Canvas>
        </div>
      </div>
    </>
  )
}

export default Home
