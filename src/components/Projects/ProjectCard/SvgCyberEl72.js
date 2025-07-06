import React from "react";

const SvgCyberEl72 = ({ className = "", style = {}, imageUrl }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={2300}
            height={1833}
            viewBox="0 0 1522 1213"
            className={className}
            style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "auto",
                fillRule: "evenodd",
                clipRule: "evenodd",
                ...style,
            }}
        >
            <defs>
                {/* ✅ Exact clip path for SIM-shaped panel */}
                <clipPath id="cyber-panel-clip">
                    <path d="M246 70 L116 200 L116 901 L1185 901 L1385 701 L1385 70 Z" />
                </clipPath>
                <style>{`.CyberEl72_svg__fil0 { fill: #00ffff; fill-rule: nonzero; }`}</style>
            </defs>

            {/* ✅ Render image inside clip using <foreignObject> */}
            {imageUrl && (
                <foreignObject
                    x="116"
                    y="70"
                    width="1269"
                    height="831"
                    clipPath="url(#cyber-panel-clip)"
                >
                    <img
                        src={imageUrl}
                        alt="Cyber content"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </foreignObject>
            )}

            {/* ✅ Decorative SVG border paths */}
            <g id="CyberEl72_svg__Vrstva_x0020_1">
                <g id="CyberEl72_svg___2610578995776">
                    <path
                        className="CyberEl72_svg__fil0"
                        d="M706 1213c-25 0-46-21-46-46s21-45 46-45 45 20 45 45-20 46-45 46zm0-72c-15 0-27 12-27 26 0 15 12 26 27 26 14 0 26-11 26-26 0-14-12-26-26-26z"
                    />
                    <path
                        className="CyberEl72_svg__fil0"
                        d="M715 1131h-19V968H54V178L232 0h153v19H240L73 186v763h642zM1232 968H740v-19h484l210-210V19H706V0h747v747l-221 221z"
                    />
                    {/* No gray panel path here — image fills it */}
                    <path
                        className="CyberEl72_svg__fil0"
                        d="M54 700v268l215 2-54 53H0V754zM1522 351c-11 0-19-8-19-18h-19v56h19c0-11 8-19 19-19v-19zM1522 426c-11 0-19-8-19-19h-19v57h19c0-11 8-19 19-19v-19zM1522 501c-11 0-19-8-19-19h-19v57h19c0-11 8-19 19-19v-19zM1522 126c-11 0-19-8-19-18h-19v56h19c0-10 8-19 19-19v-19zM1522 201c-11 0-19-8-19-18h-19v56h19c0-10 8-19 19-19v-19zM1522 276c-11 0-19-8-19-18h-19v56h19c0-11 8-19 19-19v-19z"
                    />
                </g>
            </g>
        </svg>
    );
};

export default SvgCyberEl72;
