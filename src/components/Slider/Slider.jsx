import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slide01 from "../../images/slider1.png"
import Slide02 from "../../images/slider2.jpg"
import Slide03 from "../../images/slider3.jpg"
import { guardarImagen, getList, EditImagen, DeleteImagen } from "../../services/API/UserImagenes";

export default function ControlledCarousel({ lista }) {
  const [index, setIndex] = useState(0);
  // const [dataList, setDataList] = useState([]);
  // const [dataLoaded, setDataLoaded] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log("Publicando", lista);
  console.log("Publicando", lista.length);

  // const getLista = async () => {
  //   const data = await getList();
  //   console.log("Aqu estamos llamando a getList()")
  //   console.log(data)
  //   setDataList(data);
  //   // cargarNotificaciones();
  //   setDataLoaded(true);

  //   // console.log(dataList);

  // };

  // useEffect(() => {

  //   getLista();

  // }, []);

  // useEffect(() => {
  //   if (!dataLoaded) {
  //     getLista();
  //     // setMostrarEspera(false);
  //   }
  // }, [dataList, dataLoaded]);

  return (
    <>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* <h1 className="text-white">{lista.length}</h1> */}
        {lista.map(item => (item.activo && <Carousel.Item>
          <img
            key={item.id}
            className="d-block w-100"
            src={item.url}
            alt={item.nombre}
          />
        </Carousel.Item>))}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/m5jfLM5/slider1.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/pjG68Yg/slider2.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/5vnBrF6/slider3.png"}
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>

    </>
  );
}
