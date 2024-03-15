import Grafico from "./grafico";

export default function Content(){
    return(
        <div className="flex justify-around items-center max-w-[90%] mb-10 flex-wrap w-[100%]  rounded-[20px] bg-slate-50 h-[80vh] m-auto mt-5">
        <div className="flex justify-around items-center flex-wrap max-w-[95%]">
          <div className="flex items-center justify-around flex-col max-w-[50%]">
            <h1 className="text-neutral-950 text-[48px] w-[100%] font-black">
            <span className="rounded-[20px]"><span className="bg-gradient-to-r from-cyan-500 to-blue-700 inline-block text-transparent bg-clip-text ">Welcome to</span></span> Help Desk, Simplificando o Gerenciamento de Recursos Empresariais
            </h1>
            <h1 className="text-[15px] rounded-br-[20px] border-neutral-950 border-2 rounded-l-[20px] solid p-[20px] relative right-[50px] bg-blue-700 text-slate-200  w-[83%]">
            Mantenha controle total sobre todos os funcionários da Employer. Do inventário à manutenção, o Help Desk permite que você acompanhe e gerencie cada dispositivo de forma eficiente.
            </h1>
          </div>
          <div className="flex items-center max-w-[500px]  rounded-[30px] justify-center">
              <Grafico />
          </div>
        </div>
      </div>
    );
}