import { Container } from "./LayoutStyle"
import { Content } from 'antd/es/layout/layout';
import {theme } from 'antd';
export default  ({children}) => {
    return <div className="mx-auto" style={{width:"1300px"}} >
        {children}
        </div>
   
}