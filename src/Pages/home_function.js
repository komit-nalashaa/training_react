import React, { useEffect, useState } from "react";

export function HomeFunctionalComponent(){
    const  [title, setTitle ] = useState("usestate, functional component")
    const  [title2, setTitle2 ] = useState("tittttttttttle 2")

    useEffect(()=>{
       // return title;
    }, [title])
        return(
            <div> 
                <button onClick={() =>setTitle("Value has been changed.")} type='submit'>On Click </button>
                <button onClick={() => {
                    setTitle("Tittleeee 1 ")
                    setTitle("Tittleeee 2 ")
                }} type='submit'>On Click1 
                </button>
                <button onClick={() => {
                    setTitle("Tittleeee 3 ")
                    setTitle("Tittleeee 4 ")
                }} type='submit'>On Click2 
                </button>
                

                <h1>{title}</h1>
                <h1>{title2}</h1>

            </div>
        );
}