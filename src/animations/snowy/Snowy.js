import './snowy.scss';
function Snowy({ isDay, thumb }) {
  let background;
  isDay ? (background = 'daySnow') : (background = 'nightSnow');
  let sizeClass;
  if (thumb) {
    sizeClass = 'thumb';
  }
  return (
    <div className={`snowyAnimationHolder ${background} ${sizeClass}`}>
      <div class="snow"></div>
    </div>
  );
}
export default Snowy;
