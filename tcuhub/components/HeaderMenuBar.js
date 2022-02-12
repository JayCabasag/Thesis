function HeaderItems( {Icon, title}) {
    return  (
        <div className="flex justify-center items-center md:hidden ">
            <Icon className="h-6 text-center text-slate-400 hover:text-red-500 md:pr-5 md:h-7 cursor-pointer"/>
        </div>
    );
  }
  
  export default HeaderItems;