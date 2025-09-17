const SubmitButton = ({onClick}) => {
    return ( 
        <button onClick={onClick} className="w-full bg-orange-500 text-white uppercase tracking-widest py-3 rounded-full hover:text-orange-500 transition-colors font-bold hover:bg-white ">
            Enviar
        </button>
     );
}
 
export default SubmitButton;