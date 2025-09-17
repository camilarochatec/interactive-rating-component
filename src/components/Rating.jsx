import { useState } from "react";
import SubmitButton from "./SubmitButton";
import starIcon from '../assets/icon-star.svg'; 

const Rating = () => {
    // Estados para controlar o funcionamento do componente
    const [selecionado, setSelecionado] = useState(null); // Nota selecionada
    const [enviado, setEnviado] = useState(false); // Se a avaliação foi enviada
    const [erro, setErro] = useState(false); // Se houve erro ao enviar

    // Funções que manipulam o estado
    const avaliacaoSelecionada = (nota) => {
        setSelecionado(nota);
    }
    const enviarAvaliacao = () => {
        if (!selecionado) {
            setErro(true);
            return;
        }
        setEnviado(true);
    }

    const fecharModal = () => {
        setErro(false);
    }

    return (
        <main>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl max-w-xs w-full shadow-lg text-sm">
                {/* --- Tela de Avaliação --- */}
                {enviado ?
                    (<Obrigado nota={selecionado} />)
                    : (
                        <div>{/*criamos uma nova div */}
                            <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center ">
                                {/* Container da estrela */}
                                <img src={starIcon} alt="ícone de estrela" />
                            </div>

                            <h2 className="text-white text-2xl font-bold mt-6 mb-2">
                                Avalie o nosso serviço.
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Por favor, deixe sua avaliação sobre o atendimento.
                            </p>
                            <div className="flex justify-between my-6">
                                {[1, 2, 3, 4, 5].map((nota) => (
                                    <button
                                        key={nota}
                                        onClick={() => avaliacaoSelecionada(nota)}
                                        className={`w-12 h-12 rounded-full font-bold  transition-colors ${selecionado === nota ? 'bg-orange-500 text-white'
                                            : 'bg-gray-700 text-gray-400 hover:bg-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {nota}
                                    </button>
                                ))}
                            </div>
                            {/* O componente SubmitButton será renderizado aqui */}
                            <SubmitButton onClick={enviarAvaliacao} />
                        </div>
                    )}
            </div>
            {erro && <AlertModal fechar={fecharModal} />}

        </main>
    );
}

// --- Componente Obrigado (Lógica: recebe prop 'nota') ---
const Obrigado = ({ nota }) => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Imagem de agradecimento virá aqui */}
            <p className="bg-gray-700 text-orange-500 rounded-full px-4 py-1 mb-6">Você avaliou nosso serviço como: {nota} de 5</p>
            <h2 className="text-white text-2xl font-bold mb-2">Obrigado!</h2>
            <p className="text-gray-400 leading-relaxed">Nós realmente apreciamos seu feedback.</p>

        </div>
    );
}

// --- Componente AlertModal (Lógica: recebe prop 'fechar') ---
const AlertModal = ({fechar}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4" >
            <div className="bg-white p-8 rounded-lg text-center shadow-xl max-w-sm w-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Ooops!</h3>
                <p className="text-gray-600 mb-6">Por favor, selecione uma nota antes de enviar.</p>
                <button 
                onClick={fechar}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">Fechar</button>
            </div>
        </div>
    );
}





export default Rating;