import logo from './logo.svg';
// import Nasa from "./nasa-logo-web-rgb"
import './App.css';
import Logo from './components/Logo';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import { useEffect, useState , useRef } from 'react';
import { endPointUrl } from './utils';
import SpotLightView from './components/SpotLightView/SpotlightView';
import ListView from './components/ListView/ListView';
import ListViewShimmer from './components/ListView/ListViewShimmer';

import moment from 'moment';
import { nanoid } from 'nanoid'
import CustomModal from './components/Modal';
import SpotLightViewShimmer from './components/SpotLightView/SpotLightViewShimmer';
const options = {
  root:null,
  rootMargin:"0px",
  threshold:0.2
}
function App() {
  const [apiState,setApiState] = useState("idle")  
  const [spotLightElement,setSpotlightElement] = useState({})
  const [listViews,setListViews] = useState([])
  const [currentFilter, setCurrentFilter] = useState({
    start_date:moment().subtract(14,"days").format("YYYY-MM-DD"),
    end_date:moment().format("YYYY-MM-DD")
  })
  const [firstLoad , setFirstLoad]  = useState(true)
  const [onClickImageData,setOnClickImageData] = useState({
    show:false
  })
  const targetRef = useRef(null)
 
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const [entry] = entries
      console.log(entry)
      if(entry.isIntersecting && ((!firstLoad && apiState != "loading") || firstLoad)){
        setApiState("loading")  
        endPointUrl({start_date:currentFilter.start_date,end_date:currentFilter.end_date}).then((res)=>{
          currentFilter.start_date = moment(res.data[0].date).subtract(6,"days").format("YYYY-MM-DD")
          currentFilter.end_date = moment(res.data[0].date).format("YYYY-MM-DD")
          let dataToUpdate 
          if(res.data.length >= 14){
            const tempData = [...res.data]
            setSpotlightElement(tempData[0])
            dataToUpdate =[{data:[...res.data.slice(1,8)], id:nanoid()},{  data:[...res.data.slice(8)],id:nanoid()}] 
            setFirstLoad(false)
            setListViews((prevData) => {
              return [...prevData,...dataToUpdate]
            })
          }else{
            dataToUpdate = {data:res.data,id:nanoid()}
            setListViews((prevData) => {
              return [...prevData,dataToUpdate]
            })
          }
          setApiState("success")
        }).catch((err)=>{
          setApiState("error")
        })
      }  
    },options)

    if(targetRef.current) observer.observe(targetRef.current)

    return ()=>{
      if(targetRef.current) observer.unobserve(targetRef.current)
    }

  },[targetRef,options])
  const onClickImage = (data) => {
    setOnClickImageData({...data,show:true})

  }

  const handleCloseModal = () => {
    setOnClickImageData({show:false})
  }
  return (<>
    <Layout>
      <Header />
      {
        firstLoad && apiState == "loading" ? 
        <>
        <SpotLightViewShimmer />
        <ListViewShimmer />
        <ListViewShimmer />
        </>
        :
        <>
        <SpotLightView {...spotLightElement}/>
        {
          listViews.map((data,index)=> <div className=" m-2"><ListView key={index} data={data.data} onClick={onClickImage}  /> </div>)
        }
        {
          apiState == "loading" && 
          <>
          <ListViewShimmer />
          </>
        }
        <CustomModal 
          {...onClickImageData}
          handleCloseModal={handleCloseModal}
        /> 
        </>
      }
          <div style={{marginBottom:"20px"}} ref={targetRef}></div>

    </Layout>
    </>
  );
}

export default App;
