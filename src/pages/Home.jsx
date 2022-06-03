import React, { useState, useEffect } from 'react'
import * as icons from "react-icons/bs";
import ControlledCarousel from "../components/Slider/Slider";
import Page_Contratar from '../../src/pages/Contratar'
import { Link } from 'react-router-dom';
import { guardarImagen, getList, EditImagen, DeleteImagen } from "../services/API/UserImagenes";
export default function Page_Home() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const getListData = async () => {
        const data = await getList();
        setDataList(data ? data : []);
        setDataLoaded(true);
    };

    useEffect(() => {
        if (!dataLoaded) {
            getListData();
        }
    }, [dataList, dataLoaded]);

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            {dataLoaded && <ControlledCarousel lista={dataList}/>}
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="col-md-6 col-12 col-lg-8 bg-desvanecido text-white p-5">
                        <div className="">
                            <h1 className="h2 text-white">¿Por que contratar Total play?</h1>
                            <p className="parrafosPrincipal fw-bold fs-5">Totalplay es el único proveedor de telecomunicaciones que otorga un servicio 100% de fibra óptica dentro y fuera del hogar a todos sus clientes. Con esta tecnología los usuarios obtienen una experiencia de navegación y conectividad sin interrupciones, gracias a la estabilidad de su red, sin importar el número de dispositivos conectados.</p>
                            <br />
                        </div>
                        <Link to="/Cotizador">
                        <div className="botonIrCotizador ">
                            
                             COTIZADOR
                            
                            {/* <icons.BsFillPuzzleFill /> */}
                        </div>
                        </Link>

                    </div>
                    <div className="col-md-6 col-12 col-lg-4 bg-black p-5">
                        {/* <div className="">
                            <h1 className="h2 text-white">Contrata</h1>
                            <p className="parrafosPrincipal fw-bold text-white fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam quae vero vitae unde quaerat similique amet autem dolore aperiam reprehenderit culpa magnam vel, aliquid blanditiis error odit, possimus perferendis.
                                Dolore, et. Magni ducimus omnis dolorum, voluptates expedita perferendis doloremque dicta illo facilis. Facere perferendis iste velit totam adipisci quae illum et? Quae fugit autem voluptate dolorem quia hic eius.</p>
                        </div> */}
                        <div>
                            <h2 className="h2 text-white text-center"><icons.BsFillTelephoneFill />Contacto<icons.BsFillTelephoneFill /></h2>
                        </div>
                        <Page_Contratar />
                    </div>
                </div>
            </div>

        </>
    );
}