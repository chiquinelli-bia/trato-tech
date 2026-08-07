import instance from "../common/config/api";

const itensService = {
  buscar: async () => {
    const resposta = await instance.get("/itens");

    return resposta.data;
    console.log(data);
  },
};

export default itensService;
