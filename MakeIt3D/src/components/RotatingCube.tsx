import React from "react";
import "./RotatingCube.css";

export default function RotatingCube() {
    return (
        <div className="cube-container">
            <div className="glow"></div>
            <div className="rotating-cube">
                {/* Face 1 (stripes) */}
                <div className="cube-face">3D</div>

                {/* Face 2 (radial dots) → VIDEO */}
                <div className="cube-face">
                    <video
                        src="/test.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Face 3 (split gradient) */}
                <div className="cube-face">⚡</div>

                {/* Face 4 (conic gradient) */}
                <div className="cube-face">🎨</div>

                {/* Face 5 (striped gradient with overlay) */}
                <div className="cube-face">✨</div>

                {/* Face 6 (radial circles) */}
                <div className="cube-face">🚀</div>
            </div>
        </div>
    );
}
