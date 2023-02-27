import { Image , Col, Row ,Card ,Typography } from 'antd';
const { Paragraph } = Typography
const { Meta } = Card;
const SpotLightView = ({url,media_type,explanation,date,title,copyright,hdurl}) => {



    return (
                <div className='row  flex-row-reverse'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-6 p-1'>
                    <Image
                          width={"100%"}
                          height={500}
                          src={hdurl}
                          placeholder={
                            <Image
                              preview={false}
                              src={url}
                              width={"100%"}
                              height={"100%"}
                            />
                          }
                          />
                  </div>
                  <div  className='col-sm-12 col-md-12 col-lg-6 col-12 p-1'>
                  <Card title={title} style={{width:"100%",height:"100%"}}>
                    <Meta title="Description" description={
                       <Paragraph
                       ellipsis={{
                         rows:3,
                         expandable: true,
                         suffix: copyright,
                         onEllipsis: (ellipsis) => {
                         },
                       }}
                       title={`${explanation}--${copyright}`}
                     >
                       {explanation}
                     </Paragraph>
                    } />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                     <Meta title="Author" description={copyright}  style={{position:"relative",bottom:0,padding:"10px"}}/>
                     <Meta title="Date" description={date}  style={{position:"relative",bottom:0,padding:"10px"}}/>
                    </div>

                    </Card>
                  </div>
                </div>
    )
}

export default SpotLightView



