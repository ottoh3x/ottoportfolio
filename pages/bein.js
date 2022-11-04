import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

function Bein() {

  const [episode,setEpisode] = useState(2)
  const [epLink,setEpLink] = useState("https://e18.e-amzn-cdn.net/kmxsttbupnumwmesrlseyzxaheksevrgdkrnifuxfldj3gsdffnjv2b45i5a/v.mp4")
  const episodes = [
 
  {ep:19,link:"https://e18.e-amzn-cdn.net/kmxsttbupnumwmesrlseyzxaheksevrgdkrnifuxfldj3gsdffnjv2b45i5a/v.mp4"
  },
  {ep:20,link:"https://e18.e-amzn-cdn.net/kmxstyjupnumwmesrlsey3h6gaxyhdc5b4ub3oz6qfwcehryy3qgondgp46q/v.mp4"
  },
  {ep:21,link:"https://c21.e-amzn-cdn.net/kmxstgz3pnumwmesrlsey2x3p2n4nd5r2auprxo26csdrfiouq5icpj2r7zq/v.mp4"
  },
  {ep:22,link:"https://e9.e-amzn-cdn.net/kmxsttr3pnumwmesrlseyyxdoeuavxomfuxtqdsqsv7jbgh46c2z7uu47jdq/v.mp4"
  },
  {ep:23,link:"https://e9.e-amzn-cdn.net/kmxssab3pnumwmesrl5uyonmnw2wrejvbtlinzwoelekwo5lbc2qitbutiia/v.mp4"
  },
  {ep:24,link:"https://c30.e-amzn-cdn.net/kmxstdb2pnumwmesrl5uy5vbnwmuddpakazzly4mcrqmspbv32yk5uznw4ma/v.mp4"
  },
  {ep:25,link:"https://c43.e-amzn-cdn.net/kmxstjz2pnumwmesrl5uyzhkhonfedouukw2bqblq3bemfdvrwgmddumxuna/v.mp4"
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
      className="py-2 px-4 bg-gray-200 text-black font-bold cursor-pointer rounded-lg text-center hover:bg-[#2224] border-[1px] border-stone-700">EP {ep.ep}</span>
    ))}

  </div>

  </div>;
}

export default Bein;
