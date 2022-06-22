import Api from "../api";
import { toast } from "react-toastify";

function BtnEditar({ produto, gerrarTech, status}) {
  const tokenHub = localStorage.getItem("hubToken");

  const dado = {
	"status": status
}

  console.log(produto);

  return (
    <span
      onClick={() => {
        console.log(produto);
        Api.put(`/users/techs/${produto}`,dado, {
          headers: { Authorization: `Bearer ${tokenHub}` },
        })
          .then((response) => {
            toast.success("sucesso");
            gerrarTech()
          })
          .catch((err) => toast.error("não"));

      }}
      
    >
     <button className="BtnSalvarAlterações">Salvar alterações</button>
    </span>
  );
}

export default BtnEditar;
