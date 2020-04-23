import { TOGGLE_LOADER } from "../types/toggle-loader.types";

export function toggleLoader(payload: any) {
    return {
        type: TOGGLE_LOADER,
        payload
    }
}