import React from "react";
import Card from "../components/Cards/Cards";
export default function Page_TvInternet() {
  return (
    <><div className="bg-dark">
      <h1 className="h1 text-center pt-4 pb-4 bg-dark text-success">Escoge el paquete que mas te guste </h1>
      <div className="SectionCards container pt-4 pb-4">
        <div className="row">
          <Card
            titulo="Inicial"
            subtitulo="TV + Internet 50 megas"
            precio="$639"
            velbajada="50"
            velsubida="5"
            descripcion="Descuento de por vida"
            descripcion2="-$40 a partir del 6º mes"
          />
          <Card
            titulo="Inicial"
            subtitulo="TV + Internet 100 megas"
            precio="$739"
            velbajada="100"
            velsubida="10"
            descripcion="Descuento de por vida"
            descripcion2="-$40 a partir del 6º mes"
          />

          <Card
            titulo="Inicial"
            subtitulo="TV + Internet 200 megas"
            precio="$859"
            velbajada="200"
            velsubida="20"
            descripcion="Descuento de por vida"
            descripcion2="-$60 a partir del 6º mes"
          />
          <Card
            titulo="Inicial"
            subtitulo="TV + Internet 500 megas"
            precio="$1099"
            velbajada="500"
            velsubida="50"
            descripcion="Descuento de por vida"
            descripcion2="-$80 a partir del 6º mes"
          />
          <Card
            titulo="Inicial"
            subtitulo="TV + Internet 1000 megas"
            precio="$1799"
            velbajada="1000"
            velsubida="100"
            descripcion="Descuento de por vida"
            descripcion2="-$100 a partir del 6º mes"
          />
        </div>
      </div>
    </div>
    </>
  );
}
