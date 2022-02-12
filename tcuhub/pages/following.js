import Head from 'next/head'
import HeaderItems from '../components/HeaderItems'
import SidebarItems from '../components/SidebarItems'
import HeaderMenuBar from '../components/HeaderMenuBar';
import { BellIcon, ChatIcon, MenuIcon, UserIcon, SearchIcon} from '@heroicons/react/solid'
import { HomeIcon, SpeakerphoneIcon, CalendarIcon, PresentationChartBarIcon, AcademicCapIcon, UsersIcon, PencilAltIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import NewsfeedItems from '../components/NewsfeedItems';
import AnnouncementItems from '../components/AnnouncementItems';
import HotTopicsItems from '../components/HotTopicsItems';
import RecommendedUser from '../components/RecommendedUser';
import Link from 'next/link';
import MainFollowingItems from '../components/MainFollowingItems';

export default function Following() {  


  return (
    <div className="">
      <Head>
        <title>TCU Hub Landing Page</title>
        <meta name="description" content="Tcu hub landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

    {/* Navbar */}
    <nav className='grid grid-cols-2 md:grid-cols-3 items-center shadow bg-white py-1'>
      <div className='flex-start justify-center items-center pl-5 md:pl-20'> 
        <div>
            <Image 
              src="/LogoMakr.png" 
              alt="TCU hub logo (Customized by devs)" 
              width={85} 
              height={45} 
              layout='intrinsic'
              />
        </div>
      </div>
      
        <form className='flex border-1 rounded-full h-8 md:h-10 items-center pr-4 mr-5 md:mr-0 bg-slate-100'>
            <SearchIcon className='h-7 px-3 md:px-4 text-slate-400 md:h-8'/>
            <input type="text" placeholder="Search" className='outline-0 w-full rounded-full bg-transparent px-1 text-slate-400'/>
        </form>
     
     
      <div className="grid grid-cols-4 md:flex justify-center md:justify-end md:pr-20 items-center w-screen md:w-full pb-2 md:pb-0">
        <HeaderItems Icon={ChatIcon} title='MESSAGES'/>  
        <HeaderItems Icon={BellIcon} title='NOTIFICATIONS'/>  
        <HeaderItems Icon={UserIcon} title='PROFILE'/>
        <HeaderMenuBar Icon={MenuIcon} title='MenuBar'/>
      </div>
    </nav>
    
    <div className='grid grid-col-1 md:grid-cols-3 pt-1 space-x-0 md:space-x-3 px-0'>

         {/* Side Navbar */}
          <div className="hidden md:block justify-end rounded h-max pl-32">

            <div className='grid grid-cols-1 mt-0 bg-white py-2 space rounded shadow'>
              <SidebarItems Icon={HomeIcon} title="Home"/>
              <SidebarItems Icon={SpeakerphoneIcon} title="Announcements"/> 
              <SidebarItems Icon={CalendarIcon} title="Events"/> 
              <SidebarItems Icon={PresentationChartBarIcon} title="Webinars"/> 
              <SidebarItems Icon={AcademicCapIcon} title="Scholarships"/> 
              <SidebarItems Icon={UsersIcon} title="Following"/> 
              <SidebarItems Icon={PencilAltIcon} title="E-Vote"/>
            </div>

          </div>
         {/* Newsfeed COntent*/}
          <div className='flex justify-center rounded h-screen sticky'>
            <MainFollowingItems />
          </div>

         {/* Right Side Section */}
         <div className='hidden md:grid md:grid-cols-1 rounded h-max md:pr-20 space-y-3'>
            <AnnouncementItems/>
            <HotTopicsItems/>
            <RecommendedUser/>
         </div>

`

    </div>
 



    </div>
  )
}
