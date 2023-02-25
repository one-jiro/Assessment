import { Card ,Skeleton} from 'antd';
import { HorizontolDiv } from './ListViewStyle';
const { Meta } = Card;



export default () => {
    
    const numberOfItems  = [1,2,3,4,5,6,7]
    return <HorizontolDiv>
        {  
            numberOfItems.map((element,index)=>{
           return  (
               <Card
                loading={true}
                key={index+element}
                hoverable
                style={{ width:"300px" ,minHeight:"300px",maxHeight:"300px" , display:"inline-block", padding:"20px"}}
                cover={<img alt="example" src={""} style={{maxHeight:"200px",minHeight:"200px"}} />}
              >
              <Skeleton loading={true} cover active>
                <Meta title={""} description={''} />
              </Skeleton>
              </Card>
                )
            })
        }
        
    </HorizontolDiv>
}