import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { DeleteContact, EditContact } from "../services/API/ContactList";
import { Button } from "react-bootstrap";
// import { getList } from "../services/API/ContactList";
import { useHistory } from "react-router-dom";
import { Table, Dropdown } from "react-bootstrap";
import { BsFillTrashFill, BsFillBrushFill } from "react-icons/bs";
import useUser from "../hooks/UseUser";
import Espera from './Espera'
import { guardarImagen, getList, EditImagen, DeleteImagen } from "../services/API/UserImagenes";
import {
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Alert
} from "reactstrap";
import { Form } from "react-bootstrap";

function ImagenesModal() {
    const [dataList, setDataList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [mostarEspera, setMostrarEspera] = useState(true);
    const [filtro, setFiltro] = useState(0);

    const [nombre, setNombre] = useState("");
    const [url, setUrl] = useState("");
    const [modalInsertar, setModalInsertar] = useState(false);


    const { isLogged } = useUser();
    let history = useHistory();

    useEffect(() => {
        if (!isLogged) {
            history.replace("./");
        }
    }, [history, isLogged]);

    const getListData = async () => {
        const data = await getList();
        console.log(data);
        setDataList(data ? data : []);
        setDataLoaded(true);
    };

    useEffect(() => {
        if (!dataLoaded) {
            getListData();
        }
    }, [dataList, dataLoaded]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     guardarImagen(url, nombre);
    //     setTelefono("");
    //     setNombre("");
    //     if(paquete!=null){
    //         handleC();
    //     }

    // }
    const handleClick = (contact_id) => {
        DeleteImagen(contact_id);
        setDataLoaded(false);
    };

    const handleClick2 = (id) => {
        EditImagen(id);
        setDataLoaded(false);
    };

    const onChange = (name, value) => {
        // setuserState((prev) => ({
        //   ...prev,
        //   [name]: value,
        // }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        guardarImagen(nombre, url);
        setNombre("");
        setUrl("");
        setDataLoaded(false);
        cerrarModalInsertar();
        // Registrar_Cliente(userState);
        // setuserState(userInitialState);
        // cerrarModalInsertar();
        // setDataLoaded(false);
    };
    const insertar = (prev) => {
        onSubmit();
        // var valorNuevo = { ...userState };
        // valorNuevo.id = userState.id + 1;
        // var lista = userSelected.data;
        // lista.push(valorNuevo);
        //setuserSelected({ ...prev,  modalInsertar: false });
    };

    const mostrarModalInsertar = () => {
        setModalInsertar(true)
    };

    const cerrarModalInsertar = () => {
        setModalInsertar(false)
    };

    return (
        <>
            {/* {!dataLoaded && <Espera />} */}
            {dataList.length > 0 && isLogged && (
                <div
                    className="w-100 bg-dark alturaUsuarios"
                    style={{
                        justifyContent: "initial",
                    }}
                >
                    <div className="">
                        <h1 className="bg-dark text-center p-3 h1 text-white">Imagenes modal</h1>
                    </div>
                    <div className="container">
                        <Button color="success" className="m-auto" onClick={() => mostrarModalInsertar()}>
                            Crear nueva imagen
                        </Button>


                        <Table className="bg-light w-100 m-auto rounded h5" >
                            <thead className="border bg-black">
                                <tr className="text-white">
                                    <th>Nombre</th>
                                    <th>URL</th>
                                    <th>Imagen</th>
                                    <th>Activo{(filtro % 3 == 0) ? "" : (filtro % 3 == 1) ? ":Si" : ":No"}</th>
                                    <th>Funciones</th>
                                </tr>
                            </thead>
                            <tbody className="border bg-black text-white">
                                {dataList.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nombre}</td>
                                        <td>{item.url}</td>
                                        <td><img width="150px" src={item.url}></img></td>
                                        <td>{item.activo ? "Si" : "No"}</td>
                                        <td style={{ display: "flex", justifyContent: "center" }}><Button onClick={() => handleClick2(item.id)}>< BsFillBrushFill /></Button><Button onClick={() => handleClick(item.id)}>< BsFillTrashFill /></Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )}
            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Registrar nueva imagen</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <label>Nombre*:</label>
                            <Form.Control
                                required
                                className="form-control"
                                maxLength="100"
                                minLength="3"
                                type="text"
                                min="1" max="5"
                                name="nombre"
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>URL*:</label>
                            <Form.Control
                                required
                                className="form-control"
                                maxLength="100"
                                minLength="5"
                                type="text"
                                name="url"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </FormGroup>

                        <Button type="submit" color="primary">
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </Form>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </Modal>
        </>
    )
}

export default ImagenesModal