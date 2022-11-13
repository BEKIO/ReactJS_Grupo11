import React from 'react';

const Login = () => {
   return (
     <>
        <container class="showcase">
            <div class="logo">
                 <img src="https://i.ibb.co/r5krrdz/logo.png" alt="backgroun_movies"></img>
            </div>

            <div class="showcase-content">
                <div class="formm">
                     <form>
                         <h1>Inicia sesión</h1>
                         <div class="info">
                             <input class="email" type="email" placeholder="Email o número de teléfono"></input> <br></br>
                             <input class="email" type="password" placeholder="Contraseña"></input>
                         </div>
                         <div class="btn">
                             <button class="btn-primary" type="submit">Iniciar sesión</button>
                         </div>
                         <div class="help">
                             <div>
                                <input type="checkbox" value="dfsfsffasdfas"></input>
                                <label>Recuérdame</label>
                                {/* <span class="">Recuérdame</span> */}
                                
                             </div>
                             <a href="https://www.netflix.com/dz-en/LoginHelp">¿Necesitas ayuda?</a>
                         </div>
                    </form>
                 </div>


                <div class="fcbk">                        
                    </div>
                    <div class="signup">
                        <p>¿Primera vez en Netflix?</p>
                        <a href="https://www.netflix.com/dz-en/">Suscríbete ahora</a>
                    </div>
                
                
                    <div class="more">
                        <p>
                        Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <a href="#">Más info</a> 
                        </p>
                </div>


                
                
            </div>
        </container>|

        <footer>                
                        <div class="ftr-content">
                            <div class="contact">
                                <a href="">¿Preguntas? Llama al 0800 123 4567</a>
                            </div>
                            <div class="ftr">
                                <a href="#">Preguntas frecuentes</a>
                                <a href="#">Centros de ayuda</a>
                                <a href="#">Términos de uso</a>
                            </div>
                            <div class="select">
                                <select>
                                    <option>Español</option>
                                    <option>Inglés</option>                            
                                </select>
                            </div>
                        </div>               
                </footer> 


    </>
  );
};





export default Login