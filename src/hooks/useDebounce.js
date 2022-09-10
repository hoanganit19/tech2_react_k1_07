import React, {useCallback} from 'react'
import { debounce } from "lodash";

export default function useDebounce(callback, timeout) {
    const handler = useCallback(debounce((keyword) => {
        callback(keyword); 
      }, timeout), []);

    return handler
}
