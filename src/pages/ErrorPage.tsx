import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import React from 'react';


const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if(isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data}</p>
        <Link to="/">Voltar para o inicio</Link>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Algo deu errado</h1>
        <p>{error.message}</p>
        <Link to="/">Voltar para o inicio</Link>
      </div>
    )
  }else {
    return (
      <div>
        <h1>Erro desconhecido</h1>
        <Link to="/">Voltar para o inicio</Link>
      </div>
    )
  }
}


export default ErrorPage