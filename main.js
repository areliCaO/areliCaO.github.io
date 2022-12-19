let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de Desarrollo de software y quiero ser desarrolladora Front end')
  .pauseFor(200)
  .deleteChars(10)
  .start();
