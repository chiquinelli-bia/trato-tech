import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

const criarTarefa = async ({
  fork,
  dispatch,
  busca,
  action,
  textoCarregando,
  textoSucesso,
  textoErro,
}) => {
  toast({
    title: "Carregando",
    description: textoCarregando,
    status: "loading",
    duration: 2000,
    isClosable: true,
  });
  const tarefa = fork(async (api) => {
    return await busca();
  });
  const res = await tarefa.result;
  if (res.status === "ok") {
    toast({
      title: "Sucesso!",
      description: textoSucesso,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    dispatch(action(res.value));
  }
  if (res.status === "rejected") {
    console.log("ERRO:", res.error);

    toast({
      title: "Erro",
      description: textoErro,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }
  return res;
};

export default criarTarefa;
