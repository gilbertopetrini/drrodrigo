import { FaArrowRight } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Ldpage() { 
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [nome, setNome] = useState('');

  function continuar() {
    localStorage.setItem('nome', nome); // salva o nome
    navigate('/atendimento'); // navega para outra página
  };

  function copiarTexto() {
      const texto = "116.318.197-80";
      navigator.clipboard.writeText(texto)
      toast.info('Chave PIX copiada!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }

    const mensagem = `Olá Dr. Rodrigo, vim pelo seu site e preciso da sua ajuda.`;
    const linkWhatsApp = `https://wa.me/5521995863769?text=${mensagem}`;
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2);
    };

  let nomeDigitado = nome;
  
  return (
    <>
      <ToastContainer />

      {isVisible2 ? (<div className="fixed h-[100%] w-[100%] bg-black/70 top-0 left-0 z-40 flex justify-center items-center " onClick={toggleVisibility2}>
        <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center justify-center bg-white h-fit w-[80%] xl:w-[50%] z-50 rounded-2xl shadow-2xl py-[35px]">
          <label className="text-[#838385] text-[20px] w-[90%]">Ensira seu primeiro nome:</label>
          <input onChange={(e) => setNome(e.target.value)} type="text" maxLength={25} class="focus:outline-none focus:border-none h-[50px] w-[90%] bg-[#F3F3F3] rounded-lg my-[15px] p-5"></input>
          {nomeDigitado ? (<button onClick={continuar} class="h-[50px] w-[90%] bg-[#C6A357] focus:outline-none focus:border-none rounded-lg mt-[15px] flex items-center justify-center text-white text-[20px]"><FaArrowRight/></button>) : (<button class="h-[50px] w-[90%] bg-[#575757] focus:outline-none focus:border-none rounded-lg mt-[15px] cursor-auto flex items-center justify-center text-white text-[20px]"><FaArrowRight/></button>)}
        </div>
      </div>) : (<div></div>)}


      <button onClick={toggleVisibility} class="xl:bottom-[50px] xl:left-1/2 xl:-translate-x-1/2 backdrop-blur 
      border-white/40 border flex flex-col xl:flex-row h-[50px] w-[50px] xl:w-[220px] 
      xl:h-[50px] bg-white/30 text-[#C6A357] text-[35px] justify-center items-center rounded-[20px] 
      gap-4 fixed bottom-4 right-4 z-30 shadow-lg lg:hidden">
        {isVisible ? <IoMdClose /> : <IoIosArrowUp />}
      </button>
      

      
      <header class="flex items-center justify-between pt-5 md:pl-[65px] md:pr-[65px] lg:pl-[95px] lg:pr-[95px] xl:pr-[120px] xl:pl-[120px] pl-5 pr-5 h-fit w-screen fixed z-30">
        <img src="logorodrigo.png" class="h-[60px]"/>
        <a onClick={toggleVisibility2} class="cursor-pointer flex flex-row justify-center items-center animate-scale-pulse shadow-md flex items-center text-white bg-[#C6A357] text-[15px] justify-center h-[35px] w-[180px]  rounded-lg"> Iniciar Atendimento <FaArrowRight class="flex ml-[5px] justify-center items-center text-[12px]"/></a>
      </header>

      <main class=" bg-[#202020] 2xl:h-screen 2xl:gap-[280px] h-screen md:pt-[60px] lg:pt-0 flex flex-col items-center  md:flex-row md:justify-center md:gap-[50px] lg:gap-[170px] xl:h-fit xl:gap-[180px] xl:pt-[50px] xl:pb-[60px]">
        <div>
          <p class="pt-[110px] text-[#C6A357] font-[550] leading-none md:leading-[45px] lg:leading-[60px] mt-[35px] xl:leading-[80px] text-[35px] text-center mb-5 md:text-left lg:text-[45px] xl:text-[60px] ">Descomplique seus <br/>Direitos de Consumidor.</p>
          <p class="text-white leading-tight font-[450] text-[20px] mt-[30px] text-center md:text-left lg:text-[30px] xl:text-[35px]">Especialista em Direito do Trabalho, <br></br>Consumidor e Previdenciário e Família.</p>

          <a onClick={toggleVisibility2} class=" w-[313px] text-[22px] h-[70px] bg-[#C6A357] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[40px] cursor-pointer hidden md:flex">
            Iniciar Atendimento <FaArrowRight class="flex justify-center items-center text-[19px]"/>
          </a>
          <p class="flex items-center text-white text-[14px] mt-[30px] hidden ml-2 md:flex"><FaSquare class="text-[7px] text-[#C6A357] mr-2 "/>Atendimento 24 horas</p>
          <p onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965811001&text=%F0%9F%9A%A8%20URGENTE!%0A%0AOl%C3%A1%2C%20Dr.%20J%C3%BAnior%20Almeida.%20Estou%20passando%20por%20uma%20emerg%C3%AAncia%20jur%C3%ADdica%20e%20preciso%20de%20ajuda%20o%20mais%20r%C3%A1pido%20poss%C3%ADvel.%20%0A%0APoderia%20me%20atender%20com%20urg%C3%AAncia%2C%20por%20favor%3F")} class=" flex items-center text-white text-[14px] hidden md:flex ml-2"><FaSquare class="text-[7px] text-[#d23131] mr-2 "/>Em caso de urgência,<span class="text-[#d23131] ml-1 cursor-pointer">clique aqui.</span></p>
        </div>
        
        <div class="h-fit relative">
          <div class="bg-[#C6A357] w-[313px] lg:w-[440px] h-[280px] lg:h-[220px] md:h-[117px] relative rounded-[30px] flex justify-center mt-[100px] absolute md:bottom-[-110px] xl:bottom-[-150px]">
            <img src="rodrigo.png" class="rounded-[30px] w-[500px] absolute bottom-0 lg:w-[350px] xl:w-[400px]"/>
          </div>
          <a onClick={toggleVisibility2} class="md:hidden w-[313px] text-[22px] h-[70px] bg-[#C6A357] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[30px] cursor-pointer">
            Iniciar Atendimento <FaArrowRight class="flex justify-center items-center text-[19px]"/>
          </a>
          <p class="md:hidden flex items-center text-white text-[14px] mt-[40px]"><FaSquare class="text-[7px] text-[#C6A357] mr-2"/>Atendimento 24 horas</p>
          <p onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965811001&text=%F0%9F%9A%A8%20URGENTE!%0A%0AOl%C3%A1%2C%20Dr.%20J%C3%BAnior%20Almeida.%20Estou%20passando%20por%20uma%20emerg%C3%AAncia%20jur%C3%ADdica%20e%20preciso%20de%20ajuda%20o%20mais%20r%C3%A1pido%20poss%C3%ADvel.%20%0A%0APoderia%20me%20atender%20com%20urg%C3%AAncia%2C%20por%20favor%3F")} class="md:hidden flex items-center text-white text-[14px]"><FaSquare class="text-[7px] text-[#d23131] mr-2"/>Em caso de urgência ligue,<span class="text-[#d23131] ml-1 cursor-pointer">clique aqui.</span></p>
        </div>

      </main>

      <main class="h-fit py-[50px] bg-[#C6A357] flex flex-col justify-center items-center gap-[40px] relative">
        <img src="wpp.jpg" alt="" class="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[170px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#C6A357] font-[550] text-[17px] leading-[20px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] xl:w-[700px] leading-[25px] ">Demitido sem receber as
verbas rescisórias?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >A empresa deve pagar seu acerto em até 10 dias. Você tem direito a aviso prévio, férias proporcionais e multa do FGTS. Busque a justiça se o prazo não for respeitado.
          </p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px]  md:h-[160px] h-[175px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#C6A357] font-[550] text-[17px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] xl:w-[700px] leading-[20px] md:leading-[30px]">Seu voo foi cancelado ou
atrasou muito?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >A companhia aérea deve prestar assistência material imediata. Você tem direito a reacomodação, reembolso e indenização por danos morais. Não aceite desculpas genéricas da empresa.</p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[160px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#C6A357] font-[550] text-[17px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] xl:w-[700px] leading-[20px] ">O valor da pensão alimentícia
está atrasado?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >O sustento do seu filho é prioridade absoluta. Atrasos no pagamento podem resultar em prisão do devedor e penhora de bens. Execute a cobrança judicialmente para garantir esse direito.</p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[165px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#C6A357] font-[550] text-[17px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] xl:w-[700px] leading-[25px] ">O plano de saúde negou
sua cirurgia?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >Negativas de procedimentos urgentes ou listados no rol da ANS são abusivas. O médico define o tratamento e não o plano. Você pode obter uma liminar para realizar o procedimento.</p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[160px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#C6A357] font-[550] text-[17px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] xl:w-[700px] leading-[20px] ">O INSS negou seu pedido
de aposentadoria?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >Erros de análise de tempo de contribuição são comuns. Você pode recorrer da decisão administrativa ou judicial. Garanta que todo o seu histórico de trabalho seja considerado.</p>  
        </div>

      </main>
      <footer class="bg-white h-[600px] md:h-[600px] flex flex-col items-center relative px-[25px] sm:px-[50px] xl:px-[90px]">
        <p class="text-[#C6A357] font-[550] text-[30px] pt-[25px] lg:text-[40px]">Dr. Rodrigo Honório</p>

        <div class="flex items-center flex-col-reverse md:flex-row">
          <div class="xl:w-[800px]">
            <p class="text-[16px] sm:text-[21px] lg:text-[24px] xl:text-[28px] pt-[20px] text-justify lg:mr-[30px] xl:mr-[70px]">Dr. Rodrigo Honório Patrício da Silva é advogado regularmente inscrito na <span class="font-bold ">OAB/RJ</span> e graduado pela Universidade Gama Filho. Possui especialização em Direito do Trabalho, Consumidor, Previdenciário e Família.</p>
            <p class="text-[16px] sm:text-[21px] lg:text-[24px] xl:text-[28px] mt-[20px] text-justify hidden mr-[70px] xl:flex">Meu foco é garantir que os direitos dos consumidores sejam respeitados, com  excelência e comprometimento.</p>
          </div>
          <img src="rodrigocomfundo.jpeg" class="h-[200px] mt-[20px] rounded-[15px] xl:h-[300px] xl:w-[300px] shadow-md" />
        </div>
        <p class="text-[16px] sm:text-[21px] lg:text-[24px] mt-[20px] text-justify xl:hidden ">Meu foco é garantir que os direitos dos consumidores sejam respeitados, com  excelência e comprometimento.</p>
      </footer>
    </>
  )
}

export default Ldpage