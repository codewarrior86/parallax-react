import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const bgRef = useRef();
  const moonRef = useRef();
  const mountainRef = useRef();
  const roadRef = useRef();
  const textRef = useRef();

  useEffect(() => {

    const onScroll = () => {
      bgRef.current.style.top = window.scrollY * 0.5 + "px";
      moonRef.current.style.left = -window.scrollY * 0.5 + "px";
      mountainRef.current.style.top = -window.scrollY * 0.15 + "px";
      roadRef.current.style.top = window.scrollY * 0.15 + "px";
      textRef.current.style.top = window.scrollY * 1 + "px";

      // console.log("moonRef scroll left: ", window.scrollY * 0.5 + "px")

      //scroll untuk tambah opacity 
      // if (window.scrollY > 0) {
      //   moonRef.current.style.opacity = window.scrollY * 0.01;  //scroll untuk tambah opacity      
      //   console.log("window.scrollY opacity : ", window.scrollY * 0.01)
      // } else {
      //   moonRef.current.style.opacity = 1;
      // }

      //scroll untuk kurang opacity
      if (window.scrollY > 0) {
        moonRef.current.style.opacity = 1 - (window.scrollY / 100); //scroll untuk kurang opacity
        console.log("window.scrollY opacity : ", window.scrollY * 0.01)

        // 160 >> fontsize awal        
        // textRef.current.style.fontSize = 160 - (window.scrollY) + "px"; // scroll untuk kurang fontsize  
        // textRef.current.style.fontSize = 160 + (window.scrollY) + "px"; // scroll untuk tambah fontsize
      }

      console.log("window.scrollY : ", window.scrollY)
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  }, []);


  return (
    <div className='parallaxEffect'>
      <div className='parallaxSection'>
        <img ref={bgRef} src='/img/bg.jpg' id="bg" />
        <img ref={moonRef} src='/img/moon.png' id="moon" />
        <img ref={mountainRef} src='/img/mountain.png' id="mountain" />
        <img ref={roadRef} src='/img/road.png' id="road" />
        <h2 ref={textRef} id='text'>Moon Light</h2>
        {/* h2 = 22px */}
      </div>

      <div style={{ color: 'white', textAlign: 'justify', fontSize: 1.5 + "rem" }}>
        <h1>Parallax Effect</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis perspiciatis soluta omnis, a facere consectetur ipsa porro voluptatibus debitis dolore dicta accusantium corrupti veritatis et minima ullam cum numquam aspernatur enim, sed quis est? Quaerat sed quas expedita! Recusandae modi fugit mollitia aperiam expedita, nam repudiandae, quos totam fugiat quaerat iure tempore non, soluta provident officiis nemo sunt corporis dolor ab sed nesciunt aliquam. Ab cumque tempora, sed iusto reprehenderit ducimus non. Numquam officia temporibus minima, natus adipisci eius quo placeat id nesciunt accusamus. Sapiente voluptatem culpa, laborum impedit, facilis tenetur modi accusamus vel, architecto pariatur explicabo? Quam, modi tempore aperiam assumenda est sint ipsam non impedit odit placeat dolore atque praesentium dicta in, illo fugit sapiente voluptatum distinctio nobis. Qui dolorum modi illum quasi expedita ea repellat? Voluptatum nostrum nemo cumque sapiente adipisci sequi voluptatem quaerat! Sed, ullam. Iure, velit at. Quasi praesentium deleniti ducimus, itaque inventore in minima perspiciatis veniam temporibus obcaecati sit ipsum eligendi accusantium debitis dolore ipsa. Ratione sunt dolorem accusantium corrupti voluptate ad minus veritatis consectetur eos dolor eum, placeat vero, totam voluptatum est saepe unde fuga! Harum sed, dolores dolore natus dolorum obcaecati temporibus inventore architecto ipsum delectus fugiat eos odio, impedit autem sequi!</p>
      </div>
    </div>
  );
}

export default App;
