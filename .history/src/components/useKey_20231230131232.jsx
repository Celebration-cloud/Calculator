import { useEffect, useState } from "react";

function useKey({keys, action}){
    const [key, setKey] = useState(null);
    
        useEffect(function(){
            window.addEventListener("keydown", function (e) {
                if (!keys.includes(e.code)) return;
                // Prevents the browser's default behavior of key events
                e.preventDefault();
                // Sets the pressed key to state
                setKey(e.code);
                });
                action()
        })
}
export const 
export default useKey;

