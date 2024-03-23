'use client'
import  "./loading.module.css"; 

export default function Loading(){
    return(

            <div className="loading-wave min-w-full flex items-center justify-center">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            </div>

    );
}