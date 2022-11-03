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
  {ep:9,link:"https://e16.e-amzn-cdn.net/kmxstorrpnumwmesrlseyyfjhiir5ddt47oyb66tpt2mksd4sefsxw6y3jiq/v.mp4"
  },
  {ep:10,link:"https://c43.e-amzn-cdn.net/kmxsuajrpnumwmesrlseym5ip2p3fqy2nmr4alyd3r7mnm2vx7h74cc5bydq/v.mp4"
  },
  {ep:11,link:"https://e16.e-amzn-cdn.net/kmxstbrxpnumwmesrlsey6plhyt54njpxgjyixsmmawktdzkfg7rlskqe4aq/v.mp4"
  },
  {ep:12,link:"https://c43.e-amzn-cdn.net/kmxsvljxpnumwmesrlsey2pphcu6kf7ve5yh4yevm4idlul2yepdh5g526da/v.mp4"
  },
  {ep:13,link:"https://c32.e-amzn-cdn.net/kmxst5zxpnumwmesrlsey25kp6liwtl2ltkigwqf36d3taile6l5ohjfganq/v.mp4"
  },
  {ep:14,link:"https://c40.e-amzn-cdn.net/kmxssprxpnumwmesrlsey4h6nptnft7yqbfd2t2wzn4id7vl4dvg73oea7uq/v.mp4"
  },
  {ep:15,link:"https://e18.e-amzn-cdn.net/kmxss5jxpnumwmesrlsey3vnm3okxyhc3pdus66tyywjgyfleoj5uhbibmeq/v.mp4"
  },
  {ep:16,link:"https://c34.e-amzn-cdn.net/kmxsv2bvpnumwmesrlseynvimuociov5h4nopa42g4pwjmjruptxqhvxvmva/v.mp4"
},
{ep:17,link:"https://e16.e-amzn-cdn.net/kmxssirvpnumwmesrlsey57qhcp4ey5ajlbksqrih3hqr5klf45ite7xdftq/v.mp4"
},
{ep:18,link:"https://e9.e-amzn-cdn.net/kmxss4bvpnumwmesrlseynvamzsrzt6tujtualqvlzc7njvzr2awiuaglifa/v.mp4"
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
    
    <Plyr source={videoSrc} />
  
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
