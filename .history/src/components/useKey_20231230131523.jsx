import { useEffect } from "react";

function useKey(keys, action){
    
        useEffect(function(){
            window.addEventListener("keydown", function (e) {
                e.preventDefault();
                if (!keys.includes(e.code)) return;
                // Prevents the browser's default behavior of key events
                // Sets the pressed key to state
                });
                action()
        }, [])
}
export default useKey;

