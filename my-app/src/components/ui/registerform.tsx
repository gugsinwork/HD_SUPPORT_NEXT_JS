'use client'
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import Link from "next/link";
import { Checkbox } from "./checkbox";
import { useState } from "react";


export default function LoginForm() { 
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => { 
      setDarkMode(!darkMode); 
  } 
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" min-h-screen dark:bg-neutral-100 flex justify-center items-center flex-row flex-wrap-reverse ">
      <div className="text-white mr-16 mb-[140px]">
        <h1 className="font-bold text-5xl w-[500px] dark:text-black ">Comece agora com <span className="bg-gradient-to-r from-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text">HD support</span></h1>
        <p className="w-[500px] mt-4 dark:text-black">A equipe de aprendizes do BNE tem o prazer de apresentar um projeto inovador e eficiente desenvolvido para aprimorar o funcionamento do Help Desk. Reconhecendo a importância crítica do suporte técnico para garantir a produtividade e a satisfação dos usuários, dedicamos nossos esforços para criar uma solução abrangente e intuitiva que atenda às necessidades do Help Desk de forma eficaz e eficiente.</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-center text-3xl font-bold mb-3 dark:text-black">
          Crie sua conta!
        </div>

        <form action="">
            <div>
            <Input
              placeholder="Digite seu Nome"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none dark:bg-slate-300 dark:text-black"
            />
          </div>

          <div>
            <Input
              placeholder="Digite seu E-mail"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none dark:bg-slate-300 dark:text-black"
            />
          </div>

          <div>
            <Input
            type="password"
              placeholder="Digite sua senha"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 border-none text-lg dark:bg-slate-300 dark:text-black"
            />
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
      <button onClick={toggleDarkMode} className="absolute w-16 h-16 bottom-16 right-26 bg-white text-dark dark:text-white dark:bg-neutral-900 rounded-full"> 
        {darkMode ? "LHT" : "DRK"} 
      </button> 
    </div>
    </div>
  );
}
