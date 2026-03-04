import icon from "../assets/image/download.jpg";
function Imagem(){
    return(

        <>
        <div className="container">
        <div className="img">
        <img src = {icon} ></img>
        </div>

        <div className="img2">
            <img src={icon} alt="" />
        </div>
        </div>
        
        </>

    )

}

export default Imagem;