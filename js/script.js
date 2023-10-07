document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const turma = document.getElementById("turma").value;

    

    // Simulação de envio dos dados para o servidor (substitua pelo seu código real)
    const dados = {
      nome: nome,
      matricula: matricula,
      cpf: cpf,
      email: email,
      turma: turma,
    };

    // Você pode substituir este URL pelo endpoint real onde deseja enviar os dados
    const url = "http://jkorpela.fi/cgi-bin/echo.cgi";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta do servidor:", data);

        // Verifica se a inscrição foi bem-sucedida com base na resposta do servidor
        if (data) {
          document.getElementById("mensagem").textContent = "Inscrição efetuada com sucesso.";
          form.reset(); // Limpa o formulário após o envio bem-sucedido
        } else {
          alert("Ocorreu um erro ao processar a inscrição. Por favor, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar inscrição:", error);
        alert("Ocorreu um erro ao enviar a inscrição. Por favor, tente novamente mais tarde.");
      });
  });
});
