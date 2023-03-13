export default function Header() {
  const bgImage = 'https://images.pexels.com/photos/1687147/pexels-photo-1687147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

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
