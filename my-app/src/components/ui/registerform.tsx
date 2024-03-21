'use client'
import "./styles.scss";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import Link from "next/link";
import { Checkbox } from "./checkbox";
import { useEffect, useState } from "react";
import { CircleCheck, CircleGauge, Moon, Rocket, ShieldCheck, Sun } from "lucide-react";
import axios from 'axios'; 
import { useRouter } from 'next/navigation'; 
import { Space_Grotesk } from "next/font/google";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';


export default function LoginForm() { 
  const [redirecionar, setRedirecionar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openErro, setOpenErro] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [telegram, setTelegram] = useState(''); 
  const [telefone, setTelefone] = useState(''); 
  const [statusFuncionario, setStatus] = useState(''); 
  const [categoria, setCategoria] = useState(''); 



  const router = useRouter(); 
 
  const handleNavigation = () => { 
    router.push('/login') 
  } 
 
  const handleRegister = async (e : any) => { 
    e.preventDefault(); 
 
    try { 
      const response = await axios.post('https://hd-apiv2.azurewebsites.net/api/Funcionarios/Registro-Funcionarios', { 
         
         nome , 
          email , 
          telegram , 
          telefone , 
          statusFuncionario, 
          categoria , 
           
 
      }); 
 
      // Redireciona para a página de login após o cadastro bem-sucedido 
     setOpen(true);
      setRedirecionar(true);
      setTimeout(() => {
        router.push('/login')
      }, 2000);
    } catch (error) { 
      console.error('Erro ao fazer cadastro:', error); 
      setOpenErro(true); 
      setTimeout(() => {
        router.push('/register')
      }, 2000);
    } 
  };  
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
          <div className="min-h-full w-full flex justify-center items-center">
              <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="absolute min-h-full w-full   h-[250px] flex justify-center items-center"
          >
        <Box className="absolute bg-white w-[350px] rounded-xl h-[300px] flex flex-col justify-center items-center">
        <div className="main-container">
          <div className="check-container">
            <div className="check-background">
              <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="check-shadow"></div>
          </div>
        </div>
        <h1 className="text-green-500 text-xl">Cadastro realizado com sucesso!</h1>
        </Box>
      </Modal>
        </div>

        <div className="min-h-full w-full flex justify-center items-center">
              <Modal
            open={openErro}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="absolute min-h-full w-full   h-[250px] flex justify-center items-center"
          >
        <Box className="absolute bg-white w-[350px] rounded-xl h-[300px] flex flex-col justify-center items-center">
        <div className="failure-container">
          <div className="failure-container">
            <div className="failure-background">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            </div>
            <div className="failure-shadow"></div>
          </div>
        </div>
        <h1 className="text-red-500 text-xl">Erro ao realizar cadastro</h1>
        </Box>
      </Modal>
        </div>


      <div className=" min-h-screen dark:bg-neutral-100 flex justify-center items-center flex-row flex-wrap-reverse ">
      <div className="text-white mr-16 mb-[140px]">
        <h1 className="font-bold text-5xl w-[500px] dark:text-black ">Comece agora com <span className="bg-gradient-to-r from-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text">HD support</span></h1>
        <p className="w-[500px] mt-4 dark:text-black">A equipe de aprendizes do BNE tem o prazer de apresentar um projeto inovador e eficiente desenvolvido para aprimorar o funcionamento do Help Desk.
          </p> 
               <ul className="dark:text-black">
          <li className="mt-3 flex"> <Rocket className="mr-2"/> Lorem</li>
          <li className="mt-3 flex"> <ShieldCheck className="mr-2"/> Lorem </li>
          <li className="mt-3 flex"> <CircleGauge className="mr-2"/> Lorem </li>
        </ul>

      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-center text-3xl font-bold mb-3 dark:text-black">
          Crie sua conta!
        </div>

        <form action="post" onSubmit={handleRegister}>
        <div className=" flex items-center justify-center dark:bg-slate-300 dark:text-black text-white  w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input value={nome} onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome de usuário" 
              className="border-none h-60px" 
            /> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user  relative right-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div> 

          <div className=" flex items-center justify-center text-white dark:bg-slate-300 dark:text-black w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input 
              type="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu E-mail" 
              className="border-none h-60px" 
              required
            /> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign relative right-5 "><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
          </div> 
 
          <div className="flex items-center justify-center dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input
              value={telefone} onChange={(e) => setTelefone(e.target.value)}
              placeholder="Digite seu telefone" 
              className="border-none h-60px" 
            /> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-at-sign relative right-5 "><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div className="flex items-center justify-center dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input
              value={telegram} onChange={(e) => setTelegram(e.target.value)}
              placeholder="Digite seu telegram" 
              className="border-none h-60px" 
            /> 
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"className="lucide lucide-at-sign relative right-5 "><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
          </div>
          <div className="flex items-center justify-center dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input
              value={statusFuncionario} onChange={(e) => setStatus(e.target.value)}
              placeholder="Status" 
              className="border-none h-60px" 
            /> 
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-keyhole relative  right-5"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
          </div>
          <div className="flex items-center justify-center dark:bg-slate-300 dark:text-black text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none">
            <Input
              value={categoria} onChange={(e) => setCategoria(e.target.value)}
              placeholder="Informe sua categoria" 
              className="border-none h-60px" 
            /> 
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-keyhole relative  right-5"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
          </div>



          <Button type="submit" className="dark:bg-gradient-to-r dark:from-black dark:to-black bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500 ">
            Criar conta
          </Button>
          
          <Button onClick={handleOpen}>aaaa</Button>
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
