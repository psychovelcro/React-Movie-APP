import { useLocation } from "react-router";

export function useQuery(query) {
    return new URLSearchParams(useLocation().search)
}