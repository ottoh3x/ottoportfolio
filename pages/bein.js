import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

function Bein() {

  const [episode,setEpisode] = useState(26)
  const [epLink,setEpLink] = useState("https://c5.e-amzn-cdn.net/kmxstxjzpnumwmesrl5uy4p3phl5a7qaq5uqrtta27ol2i5kyxdenqd5agqq/v.mp4")
  const episodes = [
 
  {ep:26,link:"https://c5.e-amzn-cdn.net/kmxstxjzpnumwmesrl5uy4p3phl5a7qaq5uqrtta27ol2i5kyxdenqd5agqq/v.mp4"
  },
  {ep:27,link:"https://e3.e-amzn-cdn.net/kmxsudjzpnumwmesrl5uy2h5gchzkmdzgn6nxjpj3hxhfn7ogmutnnms6oka/v.mp4"
  },
  {ep:28,link:"https://e1.e-amzn-cdn.net/kmxssozzpnumwmesrl5uy3x5hb2ox6vnxsgstqflb2i32gsxex7774sgdgia/v.mp4"
  },
  {ep:29,link:"https://c5.e-amzn-cdn.net/kmxssyjzpnumwmesrl5uynpvnqmlqioxtg3sn4c2sgrixtxfkqzosigaqljq/v.mp4"
  },
  {ep:30,link:"https://c40.e-amzn-cdn.net/kmxsttbypnumwmesrl5uyzh4hzusd5hjmedzmbypeegoqzaf2dvbdw46swiq/v.mp4"
  }
  

  ]

  const videoSrc = {
  type: "video",
  autoPlay:true,
  sources: [
    {
      src: epLink,
     
    }
  ]
};


  
  useEffect(() => {
    let get_ep = episodes.filter(e => e.ep === episode)
    setEpLink(get_ep?.[0]?.link)

  },[episode])
  console.log(episode)

  



  return <div className="bg-[#111]">
  <h1 className="font-bold p-1 text-white text-center text-3xl">EP {episode}</h1>
    <div className="p-1  ">
    
    <Plyr source={videoSrc} autoPlay playing  />
  
</div>


  <div className="text-gray-200 grid grid-cols-8 gap-2 p-4 container mx-auto">
   {episodes.map((ep,index) => (
    <span 
      onClick={() => setEpisode(ep.ep)} 
      key={index} 
      className="py-2 px-4 bg-gray-200 text-black font-bold cursor-pointer rounded-lg text-center  border-[1px] border-stone-700">EP {ep.ep}</span>
    ))}

  </div>

  </div>;
}

export default Bein;
