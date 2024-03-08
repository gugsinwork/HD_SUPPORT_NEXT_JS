export default function Content(){
    return(
        <div className="flex justify-around items-center max-w-[90%] mb-10 flex-wrap w-[100%]  rounded-[20px] bg-slate-900 h-[80vh] m-auto mt-5">
        <div className="flex justify-around items-center flex-wrap max-w-[95%]">
          <div className="flex items-center justify-around flex-col max-w-[50%]">
            <h1 className="text-slate-50 text-[48px] w-[100%] font-black">
            <span className="p-[10px] rounded-[20px] solid contrast-200 bg-gray-950"><span className="bg-gradient-to-r from-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text ">Welcome to</span></span> Help Desk, Simplificando o Gerenciamento de Recursos Empresariais
            </h1>
            <h1 className="text-[15px] rounded-br-[20px] rounded-l-[20px] solid contrast-200 p-[20px] relative right-[5px] bg-gray-950 text-slate-200  w-[100%]">
            Mantenha controle total sobre todos os funcionários da Employer. Do inventário à manutenção, o Help Desk permite que você acompanhe e gerencie cada dispositivo de forma eficiente.
            </h1>
          </div>
          <div className="flex items-center  bg-slate-950 contrast-200 max-w-[500px]  rounded-[30px] justify-center">
              <img src="graficload-unscreen.gif" className=" h-[400px] w-[500px] contrast-200  bg-slate-950 p-[20px] relative right-2 rounded-[30px]" alt="" />
          </div>
        </div>
      </div>
    );
}