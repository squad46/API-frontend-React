import ChartMoradias from './moradias';
import ChartEmpregos from './empregados';
import ChartPessoas from './pessoas';
import ChartOngs from './ongs';



function CharGeral() {
  return (
    <div class="container justify-content-center d-flex flex-wrap bg-white rounded p-3"> 
       <div className='row w-100 text-center'>
            <h4 className='col'>Moradias</h4>
            <h4 className='col'>Empregados</h4>
        </div>
        <ChartMoradias />        
        <ChartEmpregos />

        <div className='row w-100 text-center'>
            <h4 className='col'>Genero</h4>
            <h4 className='col'>Ongs</h4>
        </div>
        <ChartPessoas />
        <ChartOngs />
    </div>
  );
}
export default CharGeral;
