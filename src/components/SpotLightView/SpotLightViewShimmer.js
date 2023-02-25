import { Image , Col, Row  ,Skeleton} from 'antd';


const SpotLightViewShimmer = () => {



    return ( 
        <div className='row  flex-row-reverse'>
            <div className='col-sm-12 col-md-6 col-lg-6 p-1 col-12'>
                <Skeleton.Image active={true} style={{width:"500px", height:"500px"}} />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 p-1 col-12'>
            <Skeleton />
            </div>
        </div>
    )
}

export default SpotLightViewShimmer



