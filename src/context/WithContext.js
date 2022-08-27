import React, {useContext} from 'react'
import { AppContext } from './ContextProvider'

export function WithContext (Component){

    return function RenderComponent(props){
        //function này để xử lý dữ liệu trước khi trả về component ban đầu
        const context = useContext(AppContext);

        return <Component {...props} {...context} />
    }
}
