import React, { useEffect, useState } from "react";
import { Usuario } from "../../context/auth/AuthContext";
import api from "../../utils/api";
import { ComentarioData } from "./Post";

export const Comentario: React.FC<ComentarioData> = ({id_usuario, texto}) => {
    const [usuario,setUsuario] = useState<Usuario|null>(null);

  useEffect(() => {
    api.get<Usuario>(`/usuarios/${id_usuario}`)
    .then((response) => setUsuario(response.data))
    .catch((console.log));
  }, []);

    return (
        <p className="text-sm text-stone-700">
            <span>@{usuario?.nome} </span> {texto}
        </p>
    );
};