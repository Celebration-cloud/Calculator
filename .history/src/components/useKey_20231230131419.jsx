import { useEffect, useState } from "react";

function useKey(keys, action){
    const [key, setKey] = useState(null);
    
        useEffect(function(){
            window.addEventListener("keydown", function (e) {
                e.preventDefault();
                if (!keys.includes(e.code)) return;
                // Prevents the browser's default behavior of key events
                
                // Sets the pressed key to state
                setKey(e.code);
                });
                action()
        })
}
export const {key} = useKey
export default useKey;

