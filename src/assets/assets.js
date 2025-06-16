import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png' // Reemplazar pronto
import clock_icon from './clock_icon.png'

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'

import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
import song4 from './song4.mp3'
import song5 from './song5.mp3'
import song6 from './song6.mp3'

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon
};

export const albumsData = [
  {
    id: 0,
    name: "Beneficio Académico",
    image: img1,
    desc: "10% de descuento en matrícula universitaria",
    bgColor: "#2a4365"
  },
  {
    id: 1,
    name: "Salud Preventiva",
    image: img2,
    desc: "Consulta médica gratuita una vez al año",
    bgColor: "#22543d"
  },
  {
    id: 2,
    name: "Cine 2x1",
    image: img3,
    desc: "Dos entradas por el precio de una en Cinemark",
    bgColor: "#742a2a"
  },
  {
    id: 3,
    name: "Descuento en Supermercado",
    image: img4,
    desc: "15% menos en compras los fines de semana",
    bgColor: "#44337a"
  },
  {
    id: 4,
    name: "Apoyo de Transporte",
    image: img5,
    desc: "Subsidio de ₡10.000 mensuales para estudiantes",
    bgColor: "#234e52"
  },
  {
    id: 5,
    name: "Material Didáctico",
    image: img6,
    desc: "Reembolso del 30% en libros y útiles escolares",
    bgColor: "#744210"
  }
];

export const songsData = [
  {
    id: 0,
    name: "Plan Dental",
    image: img7,
    file: song1,
    desc: "Limpieza dental y revisiones sin costo",
    duration: "—"
  },
  {
    id: 1,
    name: "Apoyo Económico",
    image: img8,
    file: song2,
    desc: "Ayuda directa en casos de emergencia social",
    duration: "—"
  },
  {
    id: 2,
    name: "Acceso a Internet",
    image: img9,
    file: song3,
    desc: "Paquete mensual de datos para estudiantes",
    duration: "—"
  },
  {
    id: 3,
    name: "Seguro de Accidentes",
    image: img10,
    file: song4,
    desc: "Cobertura médica básica por accidentes menores",
    duration: "—"
  },
  {
    id: 4,
    name: "Talleres y Capacitaciones",
    image: img11,
    file: song5,
    desc: "Cursos gratuitos en línea y presenciales",
    duration: "—"
  },
  {
    id: 5,
    name: "Descuentos en Tecnología",
    image: img12,
    file: song6,
    desc: "Beneficios exclusivos en computadoras y tablets",
    duration: "—"
  }
];
