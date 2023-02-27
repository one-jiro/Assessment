import Logo from "../Logo"
import { Nav, NavHeader ,NavLogo ,NavRightElements} from "./HeaderStyles"
import { Typography } from 'antd';

const { Title } = Typography;

const Header = () => {

    

    // return <Nav>
    //             <NavHeader>
    //                 <div>
    //                     <Logo />
    //                     <Title level={2} strong style={{color:"white"}}>Aamir Shaikh</Title>
    //                 </div>
    //                     <NavRightElements > 
    //                         Astronomy Picture of the Day
    //                     </NavRightElements>
    //             </NavHeader>
    //        </Nav>

    return (<div className="row p-1"><nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="d-flex input-group w-auto ">
       <div className="p-2 align-items-center">
            <Logo /> 
            <h3 style={{color:"white"}}>
                By : 
              <small class="text-muted"> Aamir Shaikh</small>
            </h3>
           </div>
        </div>
      <div  >
        <div className="d-flex align-items-center">
        <h1 class="display-3" style={{color:"white"}}>
        
            Astronomy Picture of the Day
        </h1>
        </div>
      </div>
    </div>
  </nav>
  </div>)
}


export default Header