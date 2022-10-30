import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";


function Bein() {

  const [episode,setEpisode] = useState(2)
  const [epLink,setEpLink] = useState("https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4")
  const episodes = [
  {ep:2,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:3,link:"https://c5.e-amzn-cdn.net/kmxstubmpnumwmesrlseyyhupiikpscun3bitfpso2rdq5vnruxfeupveb3q/v.mp4"
  },
  {ep:4,link:"https://e15.e-amzn-cdn.net/kmxsscrmpnumwmesrlseynh3ofwgqhnufmlzge3gkuqcckxb46aawn66rg7q/v.mp4"
  },
  {ep:5,link:"https://c40.e-amzn-cdn.net/kmxsstrmpnumwmesrlsey37amf4qttyx5hv3ryndmlupdcsjiy4xdci7agza/v.mp4"
  },
  {ep:6,link:"https://e3.e-amzn-cdn.net/kmxsv7jspnumwmesrlseyz7qmvsvoywd55t3et5hdi2bzoicw5b3iuak2umq/v.mp4"
  },
  {ep:7,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:8,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:9,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:10,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:11,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:12,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:13,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:14,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },
  {ep:15,link:"https://c5.e-amzn-cdn.net/kmxsswrnpnumwmesrlsey67pp3hi4mlpo2vl5mjppm53hivm4bztyiro3h4a/v.mp4"
  },

  ]

  
  useEffect(() => {
    let get_ep = episodes.filter(e => e.ep === episode)
    setEpLink(get_ep[0].link)

  },[episode])
  console.log(episode)

  



  return <div className="bg-[#111] h-screen mx-auto">
  <h1 className="font-bold p-1 text-white text-center text-3xl">Episode {episode}</h1>
    <div className="p-3 flex justify-center items-center">
    

    <ReactPlayer width="700" height="500" url={epLink} />
  
</div>


  <div className="text-gray-200 grid grid-cols-5 gap-2 p-4">
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
