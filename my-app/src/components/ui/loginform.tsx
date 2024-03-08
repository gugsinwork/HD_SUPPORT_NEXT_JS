"use client" 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 
import { useState } from "react"; 
 
export default function LoginForm() { 
    const [darkMode, setDarkMode] = useState(false); 
 
    const toggleDarkMode = () => { 
        setDarkMode(!darkMode); 
    } 
 
 
  return (
    
    <div className={`${darkMode && "dark"}`}>
      
      <div className="flex flex-col min-h-screen dark:bg-neutral-100 justify-center items-center"> 
        <div className="text-white text-center dark:text-black text-3xl font-bold mb-3"> 
          Login to Help Desk 
        </div> 
 
        <form action=""> 
          <div> 
            <Input 
              placeholder="Digite seu E-mail" 
              className="dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none" 
            /> 
          </div> 
 
          <div> 
            <Input 
              placeholder="Digite sua senha" 
              className="dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none" 
            /> 
          </div> 
 
          <Button 
            className="dark:bg-gradient-to-r dark:from-black dark:to-black  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500" 
          > 
            Entrar 
          </Button> 
 
          <div className="text-white text-center mt-3"> 
            <span className="text-slate-500 font-bold"> 
              Não possui conta?{" "} 
              <Link href="/register" className="dark:text-black text-white font-bold"> 
                Crie uma! 
              </Link> 
            </span> 
          </div> 
        </form> 
      </div> 
      <button onClick={toggleDarkMode} className="absolute w-16 h-16 bottom-16 right-26 bg-white text-dark dark:text-white dark:bg-neutral-900 rounded-full"> 
        {darkMode ? "LHT" : "DRK"} 
      </button> 
    </div> 
  ); 
}