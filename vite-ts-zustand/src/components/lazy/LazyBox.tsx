import image from '../../images/lazy.jpg';

export default function LazyBox() {
  return (
    <div>
      <h2>TEST</h2>
      <img alt="img" src={image} />
    </div>
  );
}
