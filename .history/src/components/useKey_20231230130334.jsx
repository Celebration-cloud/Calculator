import { useEffect, useState } from "react";

function useKey({keys, action}){
    const [key, setKey] = useState(null);
    
        useEffect(function(){
            window.addEventListener("keydown", function (e) {
          function handleKeyDown(event) {
            // If the event key is already defined, do not update it. This can happen if two keys are pressed at once (e.g.,
            if (event.repeat) return;
            if(keys=== event.code)
            console.log("pressed: ", event.code);
            setKey(event.code);
          }
        })
}
