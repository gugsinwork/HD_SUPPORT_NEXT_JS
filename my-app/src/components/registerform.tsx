import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

export default function RegisterForm() {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-white mr-16">
        <h1 className="font-bold text-5xl w-[500px]">Comece agora com HD Support</h1>
        <p className="w-[500px] mt-4">A equipe de aprendizes do BNE tem o prazer de apresentar um projeto inovador e eficiente desenvolvido para aprimorar o funcionamento do Help Desk. Reconhecendo a importância crítica do suporte técnico para garantir a produtividade e a satisfação dos usuários, dedicamos nossos esforços para criar uma solução abrangente e intuitiva que atenda às necessidades do Help Desk de forma eficaz e eficiente.</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-36">
        <div className="text-white text-center text-3xl font-bold mb-3">
          Crie sua conta!
        </div>

        <form action="">
            <div>
            <Input
              placeholder="Digite seu Nome"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none"
            />
          </div>

          <div>
            <Input
              placeholder="Digite seu E-mail"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 text-lg border-none"
            />
          </div>

          <div>
            <Input
            type="password"
              placeholder="Digite sua senha"
              className="text-white w-[500px] rounded h-[60px] mt-5 bg-slate-900 border-none text-lg"
            />
          </div>



          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-lg w-[500px] h-[50px] mt-10 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-500 ">
            Criar conta
          </Button>

          <div className="text-white text-center mt-3">
            <span className="text-slate-500 font-bold">
              Já possui conta? {" "}
              <Link href="/login" className="text-white font-bold">
                Entre agora
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
