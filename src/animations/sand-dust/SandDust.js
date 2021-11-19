import './sand-dust.css';

function SandDust({ thumb }) {
  let sizeClass = '';
  if (thumb) {
    sizeClass = 'thumb';
  }
  return (
    <div className={`sandDustAnimationHolder ${sizeClass}`}>
      <div className="sandDust"></div>
    </div>
  );
}
export default SandDust;
