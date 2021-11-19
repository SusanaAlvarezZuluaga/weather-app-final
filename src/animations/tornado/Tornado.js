import './tornado.css';

function Tornado({ thumb }) {
  let sizeClass = '';
  if (thumb) {
    sizeClass = 'thumb';
  }
  return (
    <div className={`tornadoAnimationHolder ${sizeClass}`}>
      <div className="tornado"></div>
    </div>
  );
}
export default Tornado;
