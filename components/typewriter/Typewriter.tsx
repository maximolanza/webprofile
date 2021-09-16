
import { useState, useEffect } from 'react';
import Typed from 'typed.js';
import Typewriter from 'typewriter-effect';


const Typer = () => {




    return (

        <Typewriter
            options={{
                strings: ['Software developer'],
                autoStart: true,
                loop: true,
            }}
        />

    );
}

export default Typer;
/*
import { useState, useEffect } from 'react';
import Typed from 'typed.js';

const Typewriter = ({ reference, setReference, strings }) => {
    const options = {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        cursorChar: "|",
    };

    const [type, setType] = useState(reference && new Typed(reference, options));
    useEffect(() => {
        type && type.destroy();
    }, [])

    return (

        <span
            className="typeWriter"
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
                setReference(el);
            }}
        />

    );
}

export default Typewriter;
*/
