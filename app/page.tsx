"use client"
import { MdAddTask } from "react-icons/md";
import { PiBellRingingThin } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { BsFilesAlt } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import Module from "../components/Module.js";
import { PiHashStraightFill } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentUpload } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaUserCheck } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { LuTable } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";
import { IoDownloadOutline } from "react-icons/io5";
import { BsFilterSquare } from "react-icons/bs";
import Customer from "../components/Customer.js";
import { BiTargetLock } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";






export default function Home() {


  

  const customer=[
    {
      photo:"https://dz1x1c630cl14.cloudfront.net/webassets/images/home/feedback-1.webp",
      name:"Sanjay Enishetty",
      destination:"CEO, Naturals",
      feedback:"\"You are building an amazing product which got the potential and realistic features which most of the startups and SME\'s like us need, importantly at a affordable cost. We are very happy on the decision we have taken to move from Slack to Workfast.ai\""
    }, 
    {
      photo:"https://dz1x1c630cl14.cloudfront.net/webassets/images/home/feedback-2.webp",
      name:"Akhila Rajeshwar",
      destination:"Executive Director, TiE Chennai",
      feedback:"\"I\'m amazed at this app, it seems like it was made specifically for our needs. We\'ve been waiting for this solution for past 2 years so we are extremely happy. Congratulations to the entire team.\""
    }
  ]


  const data={
    Channel:[{
      icon:FaRegMessage,
      title:"Public and Private Channels",
      para:"Choose channel visibility"},
    {
      icon:PiHashStraightFill,
      title:"Add to Task",
      para:"Turn messages into action items"
    }, 
    { 
      icon:TiDocumentText,
      title:"Channel Options",
      para:"Save, Pin, Remind, Reply, Copy, any messages"
    },
    {
      icon:SlLocationPin,
      title:"Check in - Check out",
      para:"Real time employee work status"
    }]

    ,
    Project:[{
      icon:RxDashboard,
      title:"Space",
      para:"Group all similar project in one space"
    },{
      icon:BsFilesAlt,
      title:"Projects",
      para:"Run multiple projects seamlessly"
    },{
      icon:GrDocumentUpload,
      title:"Upload Files",
      para:"Drag & Drop or Upload Files to specific task"
    },{
      icon:MdOutlineDashboard,
      title:"Stage View",
      para:"View projects in workflow stages"
    }],


    Task:[{
      icon:FcTodoList,
      title:"Task and Subtask",
      para:"Create infinite tasks and subtasks."
    },
  {
    icon:FaUserCheck,
     title:"Assigned to me",
      para:"View all tasks assigned to me in one place."
  },{ 
    icon:MdEditDocument,
     title:"Docs",
      para:"Attach docs to task and subtask"
  },{
    icon: MdGroupAdd,
     title:"Collaborators",
      para:"Add collaborators to task and subtask"
  }],


    Chat:[{
      icon:LuMessageCircleMore,
      title:"DM\'s",
      para:"DM your colleagues"
    },{
      icon:FaUsers,
      title:"Group Messages",
      para:"Create multiple groups for teams"
    },{
      icon:FaRegShareSquare,
       title:"Share Files & Docs",
      para:"Share important assets in groups"
    },{
      icon:AiFillAudio,
      title:"Audio Message",
      para:"Send audio messages with one click"
    }]

    ,
    Report:[{
      icon:LuTable,
      title:"Table View",
      para:"View reports of project & task in table view"
    },
  {
    icon:VscGraphLine ,
     title:"Graph View",
      para:"View reports of project & task in graph view"
  },{
    icon:IoDownloadOutline,
     title:"Download Reports",
      para:"Export CSV files of reports."
  },{
    icon:BsFilterSquare,
     title:"Sort and Filter",
      para:"Sort overdue & completed task easily"
  }]
  }
   




  return (
    <div className="mx-auto w-full mt-20">
      <div className="border text-xs border-gray-400 shadow-lg rounded-3xl p-4  mx-5 my-10 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-2 lg:space-x-4">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start">
        <p className="text-center lg:text-start text-xs">After Successfully Raising 5.5Million Dollars So Far</p>
        <p className=" text-center lg:text-start text-base font-semibold">Happy to say Workfast.ai will be raising the next round of funding with We Founder Circle</p>
        </div>
        
        <button className=" font-semibold border  items-center border-yellow-400 rounded-md text-black bg-yellow-400 px-8 py-4  mx-auto">Click here to Apply</button>
      </div>


      <div className="mt-10 flex flex-col space-y-4 md:space-y-10">
        <h1 className="text-center text-4xl font-bold mx-2 tiny:mx-3 sm:mx-6 md:mx-16 lg:mx-20">Workfast helps you to get the most valuable <br/>
        thing in the world, &quot;Your Time &quot;.</h1>
        <p className="text-center">Workfast.ai is designed and developed to save your time by bringing in
      Focus and Productivity.</p>
      <button className=" border my-1 p-2 sm:my-2 items-center border-yellow-400 rounded-md text-black bg-yellow-400 sm:px-4 sm:py-2 mx-auto font-semibold">Book a Demo</button>
      <img className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 " alt="photo" src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/banner-project.webp"/>
      </div>


      <div className="mt-10 flex flex-col items-center justify-center space-y-3 mx-5 sm:mx-5 md:mx-10 lg:mx-20">
        <h1 className="text-center text-4xl font-bold mx-20">All-In-One platform for your team to Work <br/>
        Faster and Smarter</h1>
        <p className="text-center text-sm mt-10">Effective Team Communication, Efficient Task Management, <br/>
        Data Centric Report Generation</p>

        <div className=" flex  flex-wrap mx-1 sm:mx-2 md:mx-3 lg:mx-5 justify-around w-screen">

          <div className="  flex flex-col items-center justify-center space-y-1">
            <div className="border bg-teal-100 border-teal-100 rounded-md p-1 text-teal-700"><MdAddTask size={29}/></div>
            <h6 >Task</h6>
          </div>
          
          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-fuchsia-100 border-teal-100 rounded-md p-1 text-fuchsia-700 font-semibold"><PiBellRingingThin size={29}/></div>
          <h6>Bell</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-violet-100 border-teal-100 rounded-md p-1 text-violet-700 text-lg">@</div>
          <h6>People</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-blue-100 border-blue-100 rounded-md p-1 text-blue-700"><IoChatbubblesOutline size={29}/></div>
          <h6>Chat</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-red-100 border-red-100 rounded-md p-1 text-red-700"><RxDashboard size={29}/></div>
          <h6>CXO Dashboard</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-orange-100 border-orange-100 rounded-md p-1 text-orange-400"><TbReportAnalytics size={29}/></div>
          <h6>Report</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-amber-100 border-amber-100 rounded-md px-3 text-amber-500 text-lg ">#</div>
          <h6>Channel</h6>
          </div>

          <div className="  flex flex-col items-center justify-center space-y-1">
          <div className="border bg-teal-100 border-teal-100 rounded-md p-1 text-teal-700"><BsFilesAlt size={29}/></div>
          <h6>Project</h6>
          </div>
        </div>
        <img className="px-0 tiny:px-0 sm:px-3 md:px-5 lg:px-10" alt="imgages" src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/dashboard-banner.webp"/>
        
      </div>


      <div className="mt-20 flex  flex-col justify-center items-center tiny:mx-2 sm:mx-5 md:mx-10 lg:mx-20 space-x-3">
        
        <h1 className="text-center text-4xl font-bold mx-20"> Meet Your Team&#39;s Expectations to Foster <br/>A Better Work Culture</h1>

        <div className=" flex-1 mt-4 sm:mt-8 md:mt-15 lg:mt-20 grid md:grid-cols-1 gap-x-7 gap-y-4 p-4 xl:grid-cols-3 lg:grid-cols-2">
      <div className="w-full border border-red-600 rounded-3xl p-2 mb-4 ">
        <div className="border flex flex-col justify-between h-full border-red-600 rounded-3xl">
        <div className="p-4">
        <h1 className="text-base font-bold">Personalize Your Workspace</h1>
        <p className="text-xs">Gantt, Kanban, List, <br/> Board, box, Priority etc</p>
        </div>
        <img
      className="w-full h-auto object-contain rounded-md rounded-br-3xl pl-4"
      src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/view-work.png"
      alt="View Work"/>
      </div>
  </div>

  <div className=" w-full border border-amber-600 rounded-3xl p-2 mb-4 ">
    <div className="border flex flex-col justify-between h-full border-amber-600 rounded-3xl">
      <div className="p-4">
    <h1 className="text-base font-bold">Simplify In One Tab</h1>
    <p className="text-xs">Personalise And Customise Navigation
    Bar With One Click</p>
    </div>
    <img
      className="w-full h-auto object-contain rounded-md  px-2"
      src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/customize-click.png"
      alt="View Work"
    />
    </div>
  </div>

  <div className=" w-full border border-yellow-600 rounded-3xl p-2 mb-4 ">
    <div className="border flex flex-col justify-between h-full border-yellow-600 rounded-3xl">
      <div className="p-4">
    <h1 className="text-base font-bold">Stay Organized Every Day</h1>
    <p className="text-xs">Organize Your Work, Reminders,
    And Calendar Events</p>
    </div>
    <img
      className="w-full h-auto object-contain rounded-md  rounded-br-3xl pl-4"
      src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/whats-next.png"
      alt="View Work"
    />
    </div>
  </div>
  </div>

  <div className="flex-1 w-full border  border-blue-600 p-2 mx-20 rounded-3xl">
    <div className="border w-full border-blue-600 lg:px-24 rounded-3xl">

    <div className="p-2  flex flex-col justify-center items-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5">
    <div className="flex flex-col w-full justify-center items-center lg:max-w-md ">
    <div className="p-4">
    <h1 className="text-base font-bold">Stay Organized Every Day</h1>
    <p className="text-xs">Organize Your Work, Reminders,
    And Calendar Events</p>
    </div>
    <img
      className="w-full h-auto object-contain rounded-md"
      src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/view-work.png"
      alt="View Work"
    />
    </div>
    <div className="flex flex-col w-full justify-center items-center lg:max-w-md">
    <div className="p-4">
    <h1 className="text-base font-bold">Stay Organized Every Day</h1>
    <p className="text-xs">Organize Your Work, Reminders,
    And Calendar Events</p>
    </div>
    <img
      className="w-full h-auto object-contain rounded-md"
      src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/view-work.png"
      alt="View Work"
    />
    </div>
  </div>
  </div>
  </div>
</div>


<div className="  mt-20">
  <h1 className="text-center text-4xl font-bold mx-2 tiny:mx-3 sm:mx-6 md:mx-16 lg:mx-20">Key Features for Modern Teams</h1>
  <div className="px-0 md:px-5 lg:px-10">
  {Object.keys(data).map((key, index) => (
    <Module key={index} moduleKey={index} type={key} data={data} />
  ))}
  </div>
</div>


<div className="flex flex-col space-y-4 mt-20 mx-2 tiny:mx-3 sm:mx-6 md:mx-16 lg:mx-20 bg-gray-100">
      <h1 className="text-center text-4xl font-bold flex justify-center items-center">Mobile First App</h1>
      <p className="text-center text-gray-600 text-sm">
        Workfast.ai offers the same intuitive UI/UX on mobile, enabling users to <br/> effortlessly manage teams anytime, anywhere.
      </p>
      
      <div className="relative flex justify-center items-center py-3 md:py-6 lg:py-10  overflow-hidden">
      {/* Center Image */}
      <div >
        <img
          src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/mobile-5.webp"
          alt="Center"
          className="w-64 p-1 h-auto rounded-lg shadow-xl bg-gray-100"
        />
      </div>

      
      
      
    </div>
</div>

<div className="flex flex-col mt-20 mx-auto">
<h1 className="text-center text-4xl font-bold mx-2 tiny:mx-3 sm:mx-6 md:mx-16 lg:mx-20">Our Trusted Customers</h1>
<div className=" mx-auto flex flex-col sm:grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center">
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/tie-chennai.webp" alt="image1" className="p-10 w-full h-auto"/>
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/one-dot.webp" alt="image2" className="p-10 w-full h-auto"/>
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/vista.webp" alt="image3" className="p-10 w-full h-auto"/>
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/adept.webp" alt="image4" className="p-10 w-full h-auto"/>
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/naturals.webp" alt="image5" className="p-10 w-full h-auto"/>
  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/rajalakshmi-institute.webp" alt="image6" className="p-10 w-full h-auto"/>
</div>
</div>

<div className=" felx flex-col space-y-5">
  <h1 className="text-center text-4xl font-bold mx-2 tiny:mx-3 sm:mx-6 md:mx-16 lg:mx-20 mt-20">What Our Customers Says</h1>
  <p className="text-center text-gray-600 text-sm">Harmony of Happiness: Cherished Tales from <br/>
  Our Valued Customers</p>
  <div className="flex flex-col  space-y-5 sm:space-x-5 sm:space-y-0 justify-center  items-center sm:items-stretch sm:flex sm:flex-row ">
    {customer.map((item, index)=>(
       <Customer key={index} item ={item}/>
    ))}
    
  </div>
</div>

<div className="w-full border mt-20 border-gray-400 py-16 px-16 rounded-md flex flex-col justify-center items-center space-y-5 sm:flex sm:flex-row sm:space-x-16">
  <div className="flex flex-col justify-center items-center space-y-5 ">
    <div className="border border-red-100 rounded-lg text-red-500 bg-red-100 p-3"><BiTargetLock size={45}/></div>
    <h1 className="text-3xl font-bold text-yellow-400">10-15%</h1>
    <p className="text-base font-semibold">Increased employee focus</p>
  </div>

  <div className="flex flex-col justify-center items-center space-y-5 sm:border-l sm:border-gray-300 sm:pl-9">
    <div className="border border-blue-100 rounded-lg text-indigo-500 bg-indigo-100 p-3"><MdAddTask size={45}/></div>
    <h1 className="text-3xl font-bold text-yellow-400">20-30%</h1>
    <p className="text-base font-semibold">Faster Task Completion</p>
  </div>

  <div className="flex flex-col justify-center items-center space-y-5 sm:border-l sm:border-gray-300 sm:pl-9">
    <div className="border border-teal-100 rounded-lg text-teal-500 bg-teal-100 p-3"><HiMiniUserGroup size={45}/></div>
    <h1 className="text-3xl font-bold text-yellow-400">15-25%</h1>  
    <p className="text-base font-semibold">Improved Team Productivity</p>
  </div>

</div>


<div className=" mt-20  rounded-md flex flex-col justify-center items-center space-y-4">

<h1 className="text-center text-3xl ">Stay connected, anytime, anywhere.</h1>

<p className="text-center text-gray-600 text-sm">Maintain productivity on the go-manage tasks and communicate with your team from anywhere.</p>

<div className="flex flex-col justify-center items-center space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-3 ">
  <button className="border border-yellow-500  rounded-md bg-yellow-500 text-amber-950 text-sm font-semibold px-4 py-2">Download Workfast.ai</button>
  <button className="border border-yellow-500 rounded-md text-amber-950 text-sm font-semibold px-4 py-2">Open in Web Browser</button>
</div>

<div className="flex flex-col mx-2 sm:mx-5 md:mx-10 lg:mx-16 space-y-3 sm:space-y-0 sm:space-x-5 sm:flex sm:flex-row items-center justify-center">
  <p>Also available on:</p>
  <div className="flex flex-wrap justify-between gap-[15px] mx-2 sm:mx-5 md:mx-10 lg:mx-16 items-center sm:justify-center">
  <div className="flex   space-x-2 items-center justify-center">
    <div className="p-2 border rounded-md border-gray-300 bg-gray-300"><FcAndroidOs size={29}/></div>
    <p>Android</p>
  </div>

  <div className="flex space-x-2  items-center justify-center">
  <div className="p-2 border rounded-md border-gray-300 bg-gray-300"><FaApple size={29}/></div>
  <p>iOS</p>
  </div>

  <div className="flex space-x-2 items-center justify-center">
  <div className="p-2 border rounded-md border-gray-300 bg-gray-300"><GiWorld size={29}/></div>
  <p>Web</p>
  </div>
  </div>
  
</div>
<img className="px-2 sm:px-5 md:px-10 lg:px-20 w-full"  alt="photo" src="https://dz1x1c630cl14.cloudfront.net/webassets/images/home/available-screen.webp"/>
</div>
      
    </div>
  );
}
