function PostItems( {Icon, title}) {
    return  (
        <div className="flex justify-center shadow py-2 rounded-lg cursor-pointer hover:bg-red-200">
            <Icon className="h-5 text-center text-slate-400  md:h-7"/>
            <p className="text-slate-400 text-xs md:text-sm pt-0.5">{title}</p>
          </div>
    );
  }
  
  export default PostItems;