import React from "react";
import{TypeAnimation} from "react-type-animation";
const TypeWriteEffect = () => {
    return (
        <TypeAnimation
        sequence={[
            "I am a Web Developer",
            1000,
            "I am a Programmer",
            1000,
            "I am a Designer",
            1000,
            "Html Dev",
            1000,
            "Css Dev",
            1000,
            "Php Dev",
            1000,
            "Symfony Dev",
            1000,
            "Python Dev",
            1000,
            "React Dev",
            1000,
            "Javascript Dev",
            1000,
        ]}
        wrapper="span"
        speed={50}
        className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-black font-bold"
        repeat={Infinity}
        /> 
    );
};
export default TypeWriteEffect;