import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

export default function RegisterForm() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="text-white mr-5">
        <h1 className="font-bold text-5xl w-[500px]">Comece agora com HD Support</h1>
        <p className="w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut ex explicabo aliquam debitis dolorem quam quas, vero amet placeat facilis, necessitatibus earum delectus quia, error repudiandae voluptatem excepturi! A.</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-48">
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
              <Link href="/register" className="text-white font-bold">
                Entre agora
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
