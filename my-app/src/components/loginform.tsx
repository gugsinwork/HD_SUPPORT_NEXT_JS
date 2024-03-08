
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import Link from "next/link"


export default function LoginForm(){
    return(
        <div className="flex flex-col justify-center items-center mt-36">

                <div className="text-white text-center text-3xl font-bold mb-3">
                    
                    Login to Help Desk
                </div>

            <form action="">
                <div>
                    <Input placeholder="Digite seu E-mail" className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none"/>
                </div>

                <div>
                <Input placeholder="Digite sua senha" className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 border-none text-lg" />
                </div>

                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500 ">Entrar</Button>

                <div className="text-white text-center mt-3">
                 <span className="text-slate-500 font-bold">  Não possui conta?  <Link href="/register" className="text-white font-bold">Crie uma!</Link></span>
                </div>
            </form>
        </div>
    )
}