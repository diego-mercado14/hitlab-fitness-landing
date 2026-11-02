import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { photos, videos } from '../content';

type MediaCarouselProps = { kind: 'photos' | 'videos' };

const spanishA11y = {
  prevSlideMessage: 'Diapositiva anterior',
  nextSlideMessage: 'Diapositiva siguiente',
  firstSlideMessage: 'Esta es la primera diapositiva',
  lastSlideMessage: 'Esta es la última diapositiva',
  paginationBulletMessage: 'Ir a la diapositiva {{index}}',
  slideLabelMessage: '{{index}} de {{slidesLength}}',
  itemRoleDescriptionMessage: 'diapositiva',
};

function PhotoCard({ photo, index }: { photo: (typeof photos)[number]; index: number }) {
  return (
    <figure className="photo-card">
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width="1600" height={index === 0 ? '1200' : '900'} />
      <figcaption><span>HITLAB / COMUNIDAD</span><strong>{String(index + 1).padStart(2, '0')}</strong></figcaption>
    </figure>
  );
}

export function MediaCarousel({ kind }: MediaCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const isVideo = kind === 'videos';

  function pauseVideos() {
    document.querySelectorAll<HTMLVideoElement>('.video-slide video').forEach((video) => video.pause());
  }

  useEffect(() => {
    if (!isVideo) return;
    const onVisibilityChange = () => { if (document.hidden) pauseVideos(); };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [isVideo]);

  function updateEdges(swiper: SwiperType) {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  }

  return (
    <div className={`media-carousel ${isVideo ? 'media-carousel-video' : 'media-carousel-photo'}`}>
      {!isVideo && <div className="desktop-photo-grid" role="group" aria-label="Fotografías de HitLab">{photos.map((photo, index) => <PhotoCard key={photo.src} photo={photo} index={index} />)}</div>}
      <div className={isVideo ? '' : 'mobile-photo-carousel'}>
        <Swiper
          modules={[Pagination, Keyboard, A11y]}
          onSwiper={(swiper) => { swiperRef.current = swiper; updateEdges(swiper); }}
          onSlideChange={(swiper) => { if (isVideo) pauseVideos(); updateEdges(swiper); }}
          onResize={updateEdges}
          observer
          observeParents
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{ ...spanishA11y, containerMessage: isVideo ? 'Galería de videos de HitLab' : 'Galería de fotos de HitLab' }}
          pagination={{ clickable: true, el: `.dots-${kind}` }}
          slidesPerView={isVideo ? 1.16 : 1.08}
          spaceBetween={14}
          breakpoints={isVideo
            ? { 640: { slidesPerView: 1.65, spaceBetween: 18 }, 900: { slidesPerView: 2.35, spaceBetween: 20 }, 1200: { slidesPerView: 3.05, spaceBetween: 20 } }
            : { 640: { slidesPerView: 1.35, spaceBetween: 18 } }}
        >
          {isVideo
            ? videos.map((video, index) => (
                <SwiperSlide key={video.src} className="video-slide">
                  <div className="video-card">
                    <video
                      controls
                      preload="none"
                      playsInline
                      width="576"
                      height="1024"
                      poster={video.poster}
                      aria-label={video.label}
                      onPlay={(event) => {
                        document.querySelectorAll<HTMLVideoElement>('.video-slide video').forEach((other) => {
                          if (other !== event.currentTarget) other.pause();
                        });
                      }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Tu navegador no puede reproducir este video.
                    </video>
                    <div className="video-meta"><span>{video.label.toUpperCase()}</span><strong>{String(index + 1).padStart(2, '0')}</strong></div>
                  </div>
                </SwiperSlide>
              ))
            : photos.map((photo, index) => <SwiperSlide key={photo.src}><PhotoCard photo={photo} index={index} /></SwiperSlide>)}
        </Swiper>
        <div className="carousel-bottom">
          <div className={`carousel-dots dots-${kind}`} aria-label="Páginas de la galería" />
          <div className="carousel-arrows">
            <button type="button" aria-label="Anterior" disabled={atStart} onClick={() => swiperRef.current?.slidePrev()}><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Siguiente" disabled={atEnd} onClick={() => swiperRef.current?.slideNext()}><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
