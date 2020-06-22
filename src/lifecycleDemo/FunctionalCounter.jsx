import React, { useState, useEffect } from "react";
import Button from "../components/common/Button";

const print = (name) => {
    console.log("------------------");
    console.log(name);
    console.log("------------------");
};

const FunctionalCounter = () => {
    print('INITIALIZE')
    const [count, setcount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth)

    const handleIncrement = () => setcount(count + 1);
    const handleDecrement = () => setcount(count - 1);
    const handleSame = () => setcount(count);
    const handleResize = () => setWidth(window.innerWidth);

    // useEffect(() => {
    //     console.log("RENDERED")
    // })
    
    // Аналогия для ComponentDidMount ///////////////////////
    useEffect(() => {
        console.log('RENDERED JUST ONCE')
        /*eslint no-restricted-globals: ["error", "event"]*/
        addEventListener('resize', handleResize)

        // Аналогия для ComponentWillUnmount //////////////////
        return () => {
            console.log('COMPONENT UNMOUNTED')
            /*eslint no-restricted-globals: ["error", "event"]*/
            removeEventListener('resize', handleResize);
        }      
    }, [])

    // useEffect(() => {
    //     print('Rendered when count updated')
    // }, [count]);

    return (
        <div>
            <Button
                label="Increment"
                classes="btn btn-success m-2"
                onClick={handleIncrement}
            />
            <Button
                label="Decrement"
                classes="btn btn-success m-2"
                onClick={handleDecrement}
            />
            <Button
                label="Same"
                classes="btn btn-success m-2"
                onClick={handleSame}
            />
            <h2>{count}</h2>
            <h2>Window width: {width}</h2>
        </div>
    );
};

// Аналогия для shouldComponentUpdate ////////////////////////////////////////////
const arePropsEqual = (prevProps, nextProps) => {
    // If True - props the same (do not update)
    // False - Update
}

export default React.memo(FunctionalCounter, arePropsEqual);
