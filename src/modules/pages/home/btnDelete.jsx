import Api from "../api";
import { toast } from "react-toastify";

function BtnDeletar({ produto , gerrarTech}) {
  const tokenHub = localStorage.getItem("hubToken");
  // console.log(produto);
  return (
    <span
      onClick={() => {
        console.log(produto);
        Api.delete(`/users/techs/${produto}`, {
          headers: { Authorization: `Bearer ${tokenHub}` },
        })
          .then((response) => {
            toast.success("sucesso");
            gerrarTech()
          })
          .catch((err) => toast.error("não"));
      }}
      
    >
     <button className="btnDeletar">Excluir</button>
    </span>
  );
}

export default BtnDeletar;
