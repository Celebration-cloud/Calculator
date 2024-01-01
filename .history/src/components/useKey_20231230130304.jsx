import { useEffect, useState } from "react";

function useKey({keys, action}){
    const [key, setKey] = useState(null);
    
        useEffect(function(){
          function handleKeyDown(event) {
            // If the event key is already defined, do not update it. This can happen if two keys are pressed at once (e.g.,
            if (event.repeat) return;
            if(keys)
            console.log("pressed: ", event.code);
            setKey(event.code);
          }
        })
}
