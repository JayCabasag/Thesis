import Link from "next/link";
import { useState } from "react";

function SidebarItems( {Icon, title}) {
  
  let pages = "";

  if(title === "Home"){
    pages = "/";
  }
  if(title == "Announcements"){
    pages = "/announcements";
  }
  if(title == "Events"){
    pages = "/events";
  }
  if(title == "Webinars"){
    pages = "/webinars";
  }
  if(title == "Scholarships"){
    pages = "/scholarships";
  }
  if(title == "Following"){
    pages = "/following";
  }
  if(title == "E-Vote"){
    pages = "/e-vote";
  }

  return  (
        <Link href={pages}>
        <div>
            <div className="flex justify-center items-center h-max py-4 hover:bg-red-200 hover:rounded mx-1 cursor-pointer">
              <Icon className="h-5 text-slate-400  md:h-6 cursor-pointer"/>
              <a className=" text-center font-medium text-xs text-slate-400 cursor-pointer">{title}</a>
          </div>
        </div>
      </Link>
        
    );
 
  }
  
  export default SidebarItems;