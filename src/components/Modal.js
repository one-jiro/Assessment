import { Button, Modal } from 'antd';
import SpotLightView from './SpotLightView/SpotlightView';


const CustomModal = (props) => {


    return   <Modal
    centered
    open={props.show}
    onOk={props.handleCloseModal}
    onCancel={props.handleCloseModal}
    width={"auto"}
  >
    <SpotLightView 
    {...props}
    />
  </Modal>
}


export default CustomModal