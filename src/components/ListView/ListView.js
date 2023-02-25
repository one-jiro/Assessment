import { Card ,Skeleton} from 'antd';
import { HorizontolDiv } from './ListViewStyle';
const { Meta } = Card;



export default ({data,isLoading,onClick}) => {
    
    const numberOfItems  = [{},{},{},{},{},{},{}]
    return <HorizontolDiv>
        {data && data.length > 0 &&  
            (isLoading ? numberOfItems : data).map((element,index)=>{
                const {url,date,title , thumbnail_url} =element
           return  (
                 <Card
                key={data.title}
                hoverable
                onClick={()=>onClick(element)}
                style={{ width:"300px" ,minHeight:"300px",maxHeight:"300px" , display:"inline-block", padding:"20px",marginRight:"8px"}}
                cover={<img alt="example" src={thumbnail_url || url} style={{maxHeight:"200px",minHeight:"200px"}} />}
              >
                <Meta title={title} description={date} />
              </Card>
                )
            })
        }
        
    </HorizontolDiv>
}