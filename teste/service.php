<?php
	include("config.php");

	//verifica se uma ação foi solicitada.

	

	if(!empty($_GET['acao'];)){

		//Guardando a ação solicitada
		$acao = $_GET['acao'];


		//Chaveando para qual regra de negocio vou atuar
		switch ($acao) {
			case 'inserir':
				$nome = $_POST['nome'];
				$raca = $_POST['raca'];

				$querysql = "insert into TB_CACHORRO(NM_CACHORRO, DS_RACA) values(".$nome.",".$raca.")";
				
				if(!$_POST['nome'] = null or !$_POST['raca'] = null)
				{

					$execute = mysqli_query($conn, $querysql);
					if($query){
						echo "Dados inseridos com sucesso";
					}else{
						echo "Error";
					}

				}else{
					echo "Os dados inválidos";
				}



				break;
			
			default:
				 echo "Serviço não existe";
				break;
		}
		}

	}else{

		echo "Sem ação definida!";
	}


?>