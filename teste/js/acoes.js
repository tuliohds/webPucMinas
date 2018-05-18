//javaScript Document

$(document).ready(function(){
	
	//Enviar Dados
	$("#btEnviar").on("click", function(event){ //event pega todas as ações do objeto que é passado no caso #btnEnviar

		$("#nome_cachorro").removeClass("campoSelecionado");
		$("#raca_cachorro").removeClass("campoSelecionado");

		var nome_cachorro = $("#nome_cachorro").val();
		var raca_cachorro = $("raca_cachorro").val();

		if(nome_cachorro != "" && raca_cachorro != ""){
			enviar(nome_cachorro, raca_cachorro);		
		}else{
			if(nome_cachorro == ""){
				$("#nome_cachorro").addClass("campoSelecionado");
			}
			if(raca_cachorro == ""){
				$("raca_cachorro").addClass("campoSelecionado");
			}
			alert("Voce deve preencher os campos antes de enviar");
		}
	
	});
});

//Enviar dados por requisição assincrona
function enviar(nome_cachorro, raca_cachorro){

		$.ajax({
			method: "POST",
			url: "service.php?acao=inserir",
			data: {nome : nome_cachorro, raca : raca_cachorro } 
		})
		.done(function(msg){
			if(msg == "ok"){
				alert("Inserido com sucesso");
			}else{
				alert("Erro ao processar sua solicitação");
			}
		});
}