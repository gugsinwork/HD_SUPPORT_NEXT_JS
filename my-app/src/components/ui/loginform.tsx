"use client" 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import Link from "next/link"; 
import { useEffect, useState } from "react"; 
 
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
      
      <div className="flex flex-col min-h-screen dark:bg-neutral-100 justify-center items-center"> 
        <div className="flex text-white text-center dark:text-black text-3xl font-bold mb-3"> 
          Login to Help Desk <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff relative bottom-2" viewBox="0 0 16 16">
                        <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
                        <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
                        <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
                    </svg>
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
          <div className="flex items-center justify-end">
            <p className="text-slate-500 relative top-[20px]">Esqueceu a senha?</p>
          </div>
          <Button 
            className="dark:bg-gradient-to-r dark:from-black dark:to-black  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500" 
          > 
            Entrar 
          </Button> 
 
          <div className="text-white text-center mt-6"> 
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