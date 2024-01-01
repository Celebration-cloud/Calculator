import { useEffect } from "react";

function useKey(keys, action){
    
        useEffect(function(){

            window.addEventListener("keydown", function (e) { 
                if (!keys.includes(e.code)) return;
                e.preventDefault();
                // Prevents the browser's default behavior of key events
                // Sets the pressed key to state
                });
                action()
        }, [keys, action])
}
export default useKey;

