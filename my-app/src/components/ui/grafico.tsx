
import '@/components/ui/grafico.css'

export default function Grafico(){
    return(
        <div className="Grafico">   
            <div className="grafico-animado"> 
                <span className="coluna" id="c1"></span> 
                <span className="coluna" id="c2"></span> 
                <span className="coluna" id="c3"></span> 
                <span className="coluna" id="c4"></span> 
                <span className="coluna" id="c5"></span> 
                <span className="coluna" id="c6"></span> 
                <span className="coluna" id="c7"></span> 
                <span className="coluna" id="c8"></span> 
                <span className="coluna" id="c9"></span>
            </div>
        </div>
    );
}