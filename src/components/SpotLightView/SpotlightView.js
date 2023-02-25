import { Image , Col, Row ,Card } from 'antd';

const { Meta } = Card;
const SpotLightView = ({url,media_type,explanation,date,title,copyright,hdurl}) => {



    return (
                <div className='row  flex-row-reverse'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-6 p-1'>
                    <Image
                          width={"100%"}
                          height={500}
                          src={url}
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
                  <Card title={title} style={{width:"100%"}}>
                    <Meta title="Description" description={explanation} />
                     <Meta title="Author" description={copyright} />
                    </Card>
                  </div>
                </div>
    )
}

export default SpotLightView



