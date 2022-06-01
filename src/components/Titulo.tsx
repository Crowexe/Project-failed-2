import "./Titulo.css";

const Titulo = () => {
  return (
      <>
        <head>
                <title>Rotating Text Animation</title>
            </head>
            <body>
                <h1 className="changing-text">
                    Fly me to&nbsp;           
                    <div className="texts-container">
                        <span>
                             Japón<br/>
                             España<br/>
                             Canadá<br/>
                             the Moon
                        </span>
                    </div>
                </h1>
            </body>
    </>
  );
};

export default Titulo;