import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Atendimento() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) {
      setNome(nomeSalvo);
    }
  }, []);

  function CriaLink(resto) {
    const numero = "5521995863769";
    const mensagem = `Olá Dr. Rodrigo, me chamo ${nome}${resto}`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank"); // ou redirecionar com window.location.href = link
  }
  return (
    <div class="bg-[#202020] h-fit flex flex-col justify-center items-center py-[30px]">
      <p class="w-[90%] text-white font-bold text-[20px] text-center mb-[30px]">Olá {nome}, clique no assunto para o qual deseja atendimento:</p>
      <a onClick={() => CriaLink(", fui vítima de um golpe do PIX e preciso de seu atendimento.")}
        class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer">
        Tive meu nome negativado indevidamente
      </a>
      <a onClick={() => CriaLink(", fui vítima de uma fraude bancária e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Fui vítima de golpe do PIX ou fraude bancária
      </a>
      <a onClick={() => CriaLink(", tive problemas com voo ou bagagem extraviada e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Tive problemas com voo ou bagagem extraviada
      </a>
      <a onClick={() => CriaLink(", comprei pela internet, não recebi o produto e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Comprei pela internet e não recebi o produto
      </a>
      <a onClick={() => CriaLink(", estou recebendo cobranças indevidas e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Estou recebendo cobranças indevidas
      </a>
      <a onClick={() => CriaLink(", não recebi minhas verbas da rescisão e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Não recebi minhas verbas da rescisão
      </a>
      <a onClick={() => CriaLink(", trabalhei sem carteira assinada e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Trabalhei sem carteira assinada
      </a>
      <a onClick={() => CriaLink(", fiz horas extras e não recebi e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Fiz horas extras e não recebi
      </a>
      <a onClick={() => CriaLink(", fui demitido injustamente e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Fui demitido injustamente
      </a>
      <a onClick={() => CriaLink("e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#C6A357] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Outro assunto
      </a>
    </div>
  );
}

export default Atendimento;
