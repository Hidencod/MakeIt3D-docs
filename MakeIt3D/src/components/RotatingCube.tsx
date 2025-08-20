import React from "react";
import "./RotatingCube.css";

import test from "./test.mp4"
import raycastvideo from "./raycast.mp4"
import logo from "../../static/img/logo.png"

export default function RotatingCube() {
    return (
        <div className="cube-container">
            <div className="glow"></div>
            <div className="rotating-cube">
                {/* Face 1 (stripes) */}
                <div className="cube-face"> <img src={logo} alt="logo" style={{ width: "80px", height: "80px" }} /></div>

                {/* Face 2 (radial dots) → VIDEO */}
                <div className="cube-face">
                    <video
                        src={test}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Face 3 (split gradient) */}
                <div className="cube-face"><video
                    src={raycastvideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                /></div>

                {/* Face 4 (conic gradient) */}
                <div
                    className="cube-face"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        textAlign: "center",
                        display: "flex",          // add flex here
                        flexDirection: "column",  // stack vertically
                        alignItems: "center"      // center horizontally
                    }}
                >
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>MakeIt3D</div>
                    <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "4px" }}>
                        powered by Three.js
                    </div>
                </div>








                {/* Face 5 (striped gradient with overlay) */}
                <div className="cube-face">✨</div>

                {/* Face 6 (radial circles) */}
                <div className="cube-face">🚀</div>
            </div>
        </div>
    );
}
