import { Container } from "./styles";
import { useEffect, useState } from "react";

export function Modal({ message, showModal }) {
  const [visible, setVisible] = useState(showModal);
  const [opacity, setOpacity] = useState(1); // Estado para controlar a opacidade do modal

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  useEffect(() => {
    if (visible) {
      const modalDuration = 2000; // Aumentar o tempo total de exibição do modal para 2 segundos
      const transitionDuration = 1000; // Duração da transição de opacidade (1 segundo)

      setVisible(true);

      // Iniciar o processo de saída do modal
      const timeout = setTimeout(() => {
        const startTime = Date.now();

        // Função para atualizar a opacidade do modal ao longo do tempo
        const updateOpacity = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / transitionDuration, 1); // Progresso da transição entre 0 e 1
          const newOpacity = 1 - progress; // Calcula a nova opacidade com base no progresso

          setOpacity(newOpacity);

          // Se a transição não estiver completa, continue atualizando a opacidade
          if (progress < 1) {
            requestAnimationFrame(updateOpacity);
          } else {
            // Quando a transição estiver completa, esconda o modal
            setVisible(false);
          }
        };

        requestAnimationFrame(updateOpacity); // Inicia a atualização da opacidade
      }, modalDuration - transitionDuration); // Deixe um pequeno intervalo para que a transição ocorra

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <Container
      showModal={visible}
      className="modal-transition"
      style={{ opacity }} // Define a opacidade com base no estado local
    >
      <div className="modal-overlay">
        <div className="modal">
          <p>{message}</p>
        </div>
      </div>
    </Container>
  );
}
