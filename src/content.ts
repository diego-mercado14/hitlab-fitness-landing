const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

export const business = {
  name: 'HitLab Fitness and Fight Studio',
  phoneDisplay: '33 3992 6430',
  phoneLink: 'tel:+523339926430',
  whatsapp: 'https://wa.me/523339926430?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informes%20sobre%20HitLab%20y%20su%20clase%20de%20prueba.',
  instagram: 'https://www.instagram.com/hitlab.mx/',
  address: 'Av. Xóchitl 4385, El Zapote / Prados Tepeyac, C. P. 45050, Zapopan, Jalisco',
  maps: 'https://www.google.com/maps/place/HitLab/@20.6553572,-103.4156995,17z/data=!3m1!4b1!4m6!3m5!1s0x8428ad0020e0b319:0x378fc06273d47e6d!8m2!3d20.6553572!4d-103.4156995!16s%2Fg%2F11y_v_8ks6',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.3494539227704!2d-103.41569950000002!3d20.655357199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad0020e0b319%3A0x378fc06273d47e6d!2sHitLab!5e0!3m2!1ses!2smx!4v1793590770127!5m2!1ses!2smx',
};

export const photos = [
  { src: media('hitlab-01.jpg'), alt: 'Integrantes de la comunidad HitLab en el área de entrenamiento' },
  { src: media('hitlab-02.jpg'), alt: 'Clase de entrenamiento en el estudio HitLab' },
];

// Los posters se extrajeron de los propios videos. MP4: H.264/AAC con moov al inicio.
export const videos = [
  { src: media('hitlab-video-01.mp4'), label: 'Box en HitLab', poster: media('hitlab-video-01-poster.jpg') },
  { src: media('hitlab-video-04.mp4'), label: 'Entrenamiento de box', poster: media('hitlab-video-04-poster.jpg') },
  { src: media('hitlab-video-02.mp4'), label: 'Circuito funcional', poster: media('hitlab-video-02-poster.jpg') },
  { src: media('hitlab-video-03.mp4'), label: 'Movimiento y comunidad', poster: media('hitlab-video-03-poster.jpg') },
];
