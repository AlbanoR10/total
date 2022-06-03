import React from 'react'
import { Table, Fila } from "react-bootstrap";

function TablaPrecios({ formState, color }) {
    const PreciosPremium = [
        { value: "1", precio: "139" },
        { value: "2", precio: "199" },
    ];

    const MegasDisp = [
        { name: "50 Mb", value: "50" },
        { name: "100 Mb", value: "100" },
        { name: "200 Mb", value: "200" },
        { name: "500 Mb", value: "500" },
        { name: "1000 Mb", value: "1000" },
    ];

    const precioInternet = (value) => {

        switch (value) {
            case "50":
                return 469
                break;
            case "100":
                return 569
                break;
            case "200":
                return 689
                break;
            case "500":
                return 899
                break;
            case "1000":
                return 1599
                break;
        }
    }

    const precioTvNormal = (value) => {

        switch (value) {
            case "50":
                return 639 
                break;
            case "100":
                return 739
                break;
            case "200":
                return 859
                break;
            case "500":
                return 1099
                break;
            case "1000":
                return 1799
                break;
        }
    }

    const precioTvPlus = (value) => {

        switch (value) {
            case "50":
                return 769 
                break;
            case "100":
                return 869
                break;
            case "200":
                return 989
                break;
            case "500":
                return 1229
                break;
            case "1000":
                return 1929
                break;
        }
    }

    const precioFinal = (value) => {
        var valorFinal = 0;
        if(value.televisionValue == "0"){
            valorFinal += precioInternet(value.megasValue)
        }
        if(value.televisionValue == "1"){
            valorFinal += precioTvNormal(value.megasValue)
            valorFinal += value.tvExtraValue*129;
        }
        if(value.televisionValue == "2"){
            valorFinal += precioTvPlus(value.megasValue)
            valorFinal += value.tvExtraValue*280;
        }
        if(value.tvPremiumValue == "1"){
            valorFinal += 139
        }
        if(value.tvPremiumValue == "2"){
            valorFinal += 199
        }
        if(value.canalesValue == "1"){
            valorFinal += 99
        }
        if(value.canalesValue == "1"){
            valorFinal += 229
        }
        if(value.canalesValue == "1"){
            valorFinal += 449
        }
        if(value.streamingValue == "1"){
            valorFinal += 203
        }
        if(value.streamingValue == "2"){
            valorFinal += 99
        }
        valorFinal += value.wifiExtenderValue*69;


        return valorFinal;
        
    }
    return (
        <>
            <div className="border border-dark font-weight-bolder p-3">
                <Table className="w-100 m-auto bg-dark text-white">
                    <thead className={color ? "bg-danger" : "bg-success"}>
                        <tr>
                            <th className="tabla-elemento w-75">Concepto {color ? "Anterior" : "Actual"}</th>
                            <th className="tabla-elemento w-25">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formState.televisionValue == "0" && <tr>
                            <td className="tabla-elemento">Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">{precioInternet(formState.megasValue)}</td>
                        </tr>}
                        {formState.televisionValue == "1" && <tr>
                            <td className="tabla-elemento">TV + Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">{precioTvNormal(formState.megasValue)}</td>
                        </tr>}
                        {formState.televisionValue == "2" && <tr>
                            <td className="tabla-elemento">Nuevo TotalPlay TV +  Internet {formState.megasValue} megas</td>
                            <td className="tabla-elemento">{precioTvPlus(formState.megasValue)}</td>
                        </tr>}
                        {formState.canalesValue == "1" && <tr>
                            <td className="tabla-elemento">140 Canales</td>
                            <td className="tabla-elemento">99</td>
                        </tr>}
                        {formState.canalesValue == "2" && <tr>
                            <td className="tabla-elemento">230 Canales</td>
                            <td className="tabla-elemento">229</td>
                        </tr>}
                        {formState.canalesValue == "3" && <tr>
                            <td className="tabla-elemento">280 Canales</td>
                            <td className="tabla-elemento">449</td>
                        </tr>}
                        {formState.tvPremiumValue == "1" && <tr>
                            <td className="tabla-elemento">HBO</td>
                            <td className="tabla-elemento">139</td>
                        </tr>}
                        {formState.tvPremiumValue == "2" && <tr>
                            <td className="tabla-elemento">Star Premium</td>
                            <td className="tabla-elemento">199</td>
                        </tr>}
                        {formState.streamingValue == "1" && <tr>
                            <td className="tabla-elemento">Netflix</td>
                            <td className="tabla-elemento">203</td>
                        </tr>}
                        {formState.streamingValue == "2" && <tr>
                            <td className="tabla-elemento">Prime Video</td>
                            <td className="tabla-elemento">90</td>
                        </tr>}
                        {formState.wifiExtenderValue > 0 && <tr>
                            <td className="tabla-elemento">Wifi Extender: {formState.wifiExtenderValue}</td>
                            <td className="tabla-elemento">{formState.wifiExtenderValue * 69}</td>
                        </tr>}
                        {formState.tvExtraValue > 0 && formState.televisionValue == "1" && <tr>
                            <td className="tabla-elemento">TV Extra: {formState.tvExtraValue}</td>
                            <td className="tabla-elemento">{formState.tvExtraValue * 129}</td>
                        </tr>}
                        {formState.tvExtraValue > 0 && formState.televisionValue == "2" && <tr>
                            <td className="tabla-elemento">TV Extra: {formState.tvExtraValue}</td>
                            <td className="tabla-elemento">{formState.tvExtraValue * 280}</td>
                        </tr>}
                        <tr className={color ? "bg-danger" : "bg-success"}>
                            <td className="tabla-elemento">Total</td>
                            <td className="tabla-elemento">{precioFinal(formState)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TablaPrecios