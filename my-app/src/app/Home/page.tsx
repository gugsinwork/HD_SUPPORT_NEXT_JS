'use client'
import Grafico from "../../components/ui/grafico";
import { useEffect, useState } from "react";
import { CircleGauge, Moon, Rocket, ShieldCheck, Sun } from "lucide-react";

export default function Content(){
  
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
    return(
      <div className={`${darkMode && "dark"}`} >
          <div className="flex justify-around items-center max-w-[90%] mb-10 flex-wrap w-[100%] border-2 border-neutral-950  rounded-[20px] bg-slate-50 dark:border-slate-50 dark:bg-neutral-950 h-[80vh] m-auto mt-5">
          <div className="flex justify-around items-center flex-wrap max-w-[95%]">
            <div className="flex items-center justify-around flex-col max-w-[50%]">
              <h1 className="text-neutral-950 dark:text-slate-50 text-[48px] w-[100%] font-black">
              <span className="rounded-[20px]"><span className="bg-gradient-to-r from-cyan-500 to-blue-700 inline-block text-transparent bg-clip-text ">Welcome to</span></span> Help Desk, Simplificando o Gerenciamento de Recursos Empresariais
              </h1>
              <h1 className="text-[15px] rounded-br-[20px] border-neutral-950 border-2 rounded-l-[20px] solid p-[20px] relative right-[50px] bg-blue-700 dark:border-slate-50 text-slate-200  w-[83%]">
              Mantenha controle total sobre todos os funcionários da Employer. Do inventário à manutenção, o Help Desk permite que você acompanhe e gerencie cada dispositivo de forma eficiente.
              </h1>
            </div>
            <div className="flex items-center max-w-[500px]  rounded-[30px] justify-center">
                <Grafico />
            </div>
          </div>
        </div>
        <button onClick={toggleDarkMode} className="ml-5 text-center flex justify-center items-center absolute w-10 h-10 bottom-16 right-26 bg-white text-dark dark:text-white dark:bg-neutral-900 rounded-full"> 
        {darkMode ? <Sun/> : <Moon/>} 
      </button> 
        </div>
       
    );
}