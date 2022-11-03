import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

function Bein() {

  const [episode,setEpisode] = useState(2)
  const [epLink,setEpLink] = useState("https://e16.e-amzn-cdn.net/kmxstcrrpnumwmesrlseymnbhpb5dyokne5yzrvm5b6fdxlhl6nu3bffj6na/v.mp4")
  const episodes = [
 
  {ep:8,link:"https://e16.e-amzn-cdn.net/kmxstcrrpnumwmesrlseymnbhpb5dyokne5yzrvm5b6fdxlhl6nu3bffj6na/v.mp4"
  },
  {ep:9,link:"https://vidhd.fun/embed-a0317bdran86.html"
  },
  {ep:10,link:"https://vidhd.fun/embed-21wf0oz30wdk.html"
  },
  {ep:11,link:"https://vidhd.fun/embed-xr77e7j4790y.html"
  },
  {ep:12,link:"https://vidhd.fun/embed-hv1l267q90zu.html"
  },
  {ep:13,link:"https://vidhd.fun/embed-j3v4s6qmmzzy.html"
  },
  {ep:14,link:"https://vidhd.fun/embed-qgblv2zmkfqb.html"
  },
  {ep:15,link:"https://vidhd.fun/embed-o4oizgle67ru.html"
  },
  {ep:16,link:"https://vidhd.fun/embed-71l5xyueo9qm.html"
},
{ep:17,link:"https://vidhd.fun/embed-vi1nzbqc39at.html"
},
{ep:18,link:"https://vidhd.fun/embed-79okb90slxjd.html"
}

  ]

  const videoSrc = {
  type: "video",
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
  <h1 className="font-bold p-1 text-white text-center text-3xl">Episode {episode}</h1>
    <div className="p-1  ">
    
    {/* <Plyr source={videoSrc} /> */}
    <iframe src={epLink} width="800" height="512" allowFullScreen sandbox ></iframe>
  
</div>


  <div className="text-gray-200 grid grid-cols-5 gap-2 p-4 container mx-auto">
   {episodes.map((ep,index) => (
    <span 
      onClick={() => setEpisode(ep.ep)} 
      key={index} 
      className="py-2 px-4 bg-[#222] cursor-pointer rounded-lg text-center hover:bg-[#2224] border-[1px] border-stone-700">Episode {ep.ep}</span>
    ))}

  </div>

  </div>;
}

export default Bein;
