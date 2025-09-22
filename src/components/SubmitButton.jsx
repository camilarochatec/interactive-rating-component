const SubmitButton = ({onClick, titulo}) => {
    return (   //onclick é uma função de callback que será passada como prop
        <button onClick={onClick} className="w-full bg-orange-500 text-white uppercase tracking-widest py-3 rounded-full hover:text-orange-500 transition-colors font-bold hover:bg-white cursor-pointer ">
            {titulo}
        </button>
     );
}

export default SubmitButton;