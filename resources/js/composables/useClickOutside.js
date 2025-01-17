// useClickOutside.js
import { onMounted, onUnmounted } from "vue";

export function useClickOutside(elementRef, callback, excludeRefs = []) {
    // Safety check for required parameters
    if (!elementRef || typeof callback !== "function") return;

    const handleClick = (event) => {
        // First, check if elementRef exists and is a valid ref
        if (!elementRef?.value) return;

        // Check if click was inside any of the excluded elements
        const isClickInExcluded = excludeRefs.some(ref => 
            ref?.value?.contains(event.target)
        );

        // Only trigger callback if click was outside both the main element 
        // and all excluded elements
        if (!elementRef.value.contains(event.target) && !isClickInExcluded) {
            callback(event);
        }
    };

    onMounted(() => {
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);
    });

    onUnmounted(() => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
    });
}