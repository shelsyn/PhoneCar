export default function Header() {
  const bgImage = './img2.png';

  return (
    <section id="Home">
      <div
        className="w-screen h-[70vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
}
