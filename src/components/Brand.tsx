export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="HitLab, volver al inicio">
      <img src={`${import.meta.env.BASE_URL}logo-provisional.svg`} width="470" height="150" alt="HitLab Fitness and Fight Studio" />
    </a>
  );
}
