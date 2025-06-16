import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Catálogo</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <b>Benefix</b> <b>• 1,232 visitas</b> • <b>6 beneficios</b>
          </p>
        </div>
      </div>

      {/* Encabezado */}
      <div className="grid grid-cols-6 mt-10 mb-4 px-4 gap-4 text-[#a7a7a7] text-sm font-semibold">
        <p><b className="mr-4">#</b>Nombre</p>
        <p>Empresa</p>
        <p>Ubicación</p>
        <p>Categoría</p>
        <p className="hidden sm:block">Agregado</p>
        <p className="text-right">Precio</p>
      </div>
      <hr />

      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={item.id}
          className="grid grid-cols-6 gap-4 px-4 py-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <div className="text-white text-sm md:text-[15px] flex items-center gap-3">
            <b className="text-[#a7a7a7]">{index + 1}</b>
            <img className="w-10 rounded" src={item.image} alt={item.name} />
            <div className="flex flex-col">
              <span>{item.name.slice(0, 20)}</span>
              <span className="text-[#a7a7a7] text-xs">{item.desc.slice(0, 20)}</span>
            </div>
          </div>

          <p className="text-sm text-white">Empresa XYZ</p>
          <p className="text-sm text-white">San José</p>
          <p className="text-sm">{albumData.name}</p>
          <p className="text-sm hidden sm:block">hace 5 días</p>
          <p className="text-sm text-right text-white">₡5,000</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
