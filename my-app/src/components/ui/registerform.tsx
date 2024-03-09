'use client'
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import Link from "next/link";
import { Checkbox } from "./checkbox";
import { useEffect, useState } from "react";
import { CircleGauge, Moon, Rocket, ShieldCheck, Sun } from "lucide-react";

import { Space_Grotesk } from "next/font/google";


export default function LoginForm() { 



  const [darkMode, setDarkMode] = useState(false); 
 
    const toggleDarkMode = () => { 
        setDarkMode(!darkMode); 

        const newMode = !darkMode;

        setDarkMode(newMode);

        localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled')
    } 

    useEffect(() => {

      const storedMode = localStorage.getItem('darkMode');
      if (storedMode === 'enabled'){
        setDarkMode(true);
      }
    },

    []);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" min-h-screen dark:bg-neutral-100 flex justify-center items-center flex-row flex-wrap-reverse ">
      <div className="text-white mr-16 mb-[140px]">
        <h1 className="font-bold text-5xl w-[500px] dark:text-black ">Comece agora com <span className="bg-gradient-to-r from-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text">HD support</span></h1>
        <p className="w-[500px] mt-4 dark:text-black">A equipe de aprendizes do BNE tem o prazer de apresentar um projeto inovador e eficiente desenvolvido para aprimorar o funcionamento do Help Desk.
        <ul>
          <li className="mt-3 flex"> <Rocket className="mr-2"/> Lorem</li>
          <li className="mt-3 flex"> <ShieldCheck className="mr-2"/> Lorem </li>
          <li className="mt-3 flex"> <CircleGauge className="mr-2"/> Lorem </li>
        </ul>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-center text-3xl font-bold mb-3 dark:text-black">
          Crie sua conta!
        </div>

        <form action="">
        <div className=" flex items-center justify-center dark:bg-slate-300 dark:text-black text-white  w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input 
              placeholder="Digite seu nome de usuário" 
              className="border-none h-60px" 
            /> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user  relative right-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div> 

          <div className=" flex items-center justify-center text-white dark:bg-slate-300 dark:text-black w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input 
              placeholder="Digite seu E-mail" 
              className="border-none h-60px" 
            /> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign relative right-5 "><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
          </div> 
 
          <div className="flex items-center justify-center dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input 
              placeholder="Digite sua senha" 
              className="border-none h-60px" 
            /> 
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-keyhole relative  right-5"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
          </div>



          <Button className="dark:bg-gradient-to-r dark:from-black dark:to-black bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500 ">
            Criar conta
          </Button>

          <div className="text-white text-center mt-3">
            <span className="text-slate-500 font-bold">
              Já possui conta? {" "}
              <Link href="/login" className="text-white font-bold dark:text-black">
                Entre agora
              </Link>
            </span>
          </div>
        </form>
      </div>

    </div>
    <button onClick={toggleDarkMode} className="ml-5 text-center flex justify-center items-center absolute w-10 h-10 bottom-16 right-26 bg-white text-dark dark:text-white dark:bg-neutral-900 rounded-full"> 
        {darkMode ? <Sun/> : <Moon/>} 
      </button> 
    </div>
  );
}
