'use client'
import  "../ui/loading.module.css"; 

export default function Loading(){
    return(
        <div className="w-full h-full absolute justify-center items-center ">
            <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            </div>
        </div>
    );
}