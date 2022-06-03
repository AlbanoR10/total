import axios from "axios";
const DEV_ENDPOINT = "https://springtotal.wl.r.appspot.com";


export const guardarImagen = (nombre, url) => {
    try {
      axios.post(`${DEV_ENDPOINT}/guardarImagen`, {
        nombre,
        url
      });
      
      alert("Imagen subida con exito!", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    } catch (error) { 
      alert("Imagen no subirda, porfavor intente mas tarde", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
      console.log(error);
      throw error;
    }
  };

  export const getList = async () => {
    // let jwt = sessionStorage.getItem("jwt");
    // if (!jwt) return [];
    console.log(" a ver que trae get list")
    try {
      const resp = await axios.get(`${DEV_ENDPOINT}/listarImagenes`, {
      });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const EditImagen = (id) => {
    let jwt = sessionStorage.getItem("jwt");
    try {
      axios.post(`${DEV_ENDPOINT}/editarImagen`, {
        id,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        }
      });
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };

  export const DeleteImagen = (id) => {
    let jwt = sessionStorage.getItem("jwt");
    try {
      axios.post(`${DEV_ENDPOINT}/eliminarImagen`, {
        id,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        } 
      });
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };