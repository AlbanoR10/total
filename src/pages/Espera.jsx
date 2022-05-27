import React from 'react'

function Espera() {
  return (
    <div className="container">
      <div className="bg-black col-12 col-md-8 m-auto pt-5">
        <div className="">
          <div className="m-auto bg-dark ps-5 pt-5 pb-5 pe-5 rounded border w-100">
            <h1 className="bg-info p-3 h1 text-center border rounded fw-bolder">Cargando Datos</h1>
            <strong className="text-warning">Espera un momento</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Espera