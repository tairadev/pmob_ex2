import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './cartao';
import Comentario from './comentario';

const nomes = {nome1: 'Cláudio', nome2: 'Cleber', nome3: 'Jefferson'}

const comentarios = {
    comentario1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit nec nibh maximus, eu auctor quam mollis. Duis at tortor a tortor tristique vestibulum non eu eros. Ut interdum consectetur accumsan.',
    comentario2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit nec nibh maximus, eu auctor quam mollis. Duis at tortor a tortor tristique vestibulum non eu eros. Ut interdum consectetur accumsan.',
    comentario3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta velit nec nibh maximus, eu auctor quam mollis. Duis at tortor a tortor tristique vestibulum non eu eros. Ut interdum consectetur accumsan.'
}

const App = () => {
    return (
        <div className="container border border-4 border-primary rounded-3 mt-2">

            <div className="row border-bottom m-2 bg-primary bg-opacity-25">
                <h1 className="display-5 text-center">Comentários</h1>
            </div>

            {/* primeira linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nomes.nome1}
                    data="22/04/2021"
                    hora="10:32">
                        <Comentario 
                            foto="https://i.pinimg.com/564x/75/c6/36/75c636e5281e5790fb8f5e8a3be726bc.jpg"
                            comentario={comentarios.comentario1}
                        />
                    </Cartao>
                </div>
            </div>

            {/* segunda linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nomes.nome2}
                    data="20/04/2021"
                    hora="18:12">
                        <Comentario 
                            foto="https://i.pinimg.com/564x/ff/11/40/ff1140d6700b608916955b4920939a08.jpg"
                            comentario={comentarios.comentario2}
                        />
                    </Cartao>
                </div>
            </div>

            {/* terceira linha de comentario */}
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 m-2">
                    <Cartao 
                    nome={nomes.nome3}
                    data="22/01/2021"
                    hora="03:48">
                        <Comentario 
                            foto="https://i.pinimg.com/564x/d1/3e/3d/d13e3d059b82fa9d005f415afef554a2.jpg"
                            comentario={comentarios.comentario3}
                        />
                    </Cartao>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
);


