import bg from '../assets/hero/bg.jpg'




function Hero() {
  return (
    <section>
      <div className=" relative container bg-primary mx-auto rounded-lg overflow-hidden h-[400px] bg-cover bg-center bg-no-repeat mt-5" style={{
        backgroundImage: `url(${bg})`,
        
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black "></div>
        
        <div className="relative z-10 flex items-end justify-start h-full rounded-lg">
    <div className="text-left text-white m-8">
      <h1 className="text-4xl font-bold mb-1">Welcome to Our Site</h1>
      <p className="text-lg mb-8">Discover the best solutions for your business.</p>
      
    </div>
  </div>
  
          </div>
    </section>


      
  )
}
export default Hero