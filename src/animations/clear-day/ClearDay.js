import './clear-day.css';

function ClearDay(props) {
  let className = '';
  let sunClass = '';
  if (props.thumb) {
    className = 'thumb';
    sunClass = 'smaller';
  }
  return (
    <div className={`clearDayAnimationHolder ${className}`}>
      <div className={`sun ${sunClass}`}></div>
    </div>
  );
}
export default ClearDay;
