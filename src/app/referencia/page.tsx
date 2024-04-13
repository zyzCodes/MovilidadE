import Navbar from "../components/Navbar";

function Relevancia() {

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen w-full mb-4 mt-11 bg-white">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center w-full md:w-3/4 mb-10">Referencias: </h1>
          <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full max-w-4xl">
            <p className="text-lg text-gray-700 mb-4">
              Hoshing, V., Vora, A., Saha, T., Jin, X., Shaver, G., Wasynczuk, O., García, R. E., &amp; Varigonda, S. (2020). Comparison of economic viability of series and parallel PHEVs for medium-duty truck and transit bus applications. <em>Proceedings of the Institution of Mechanical Engineers, Part D: Journal of Automobile Engineering, 234</em>(10-11), 2458–2472. <a href="https://doi.org/10.1177/0954407020919255" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">https://doi.org/10.1177/0954407020919255</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Souza Filipe Leonardo Cardoso. (Year). Financial evaluation of electric propulsion projects in public transport. <em>Case Studies on Transport Policy</em>. Federal University of Rio de Janeiro, Master in Transportation Engineering. Civil Engineer, Federal University of Alagoas. SGAN 915 C 317, Brasília, 70790-153, Brazil. Retrieved from <a href="https://www.elsevier.com/locate/cstp" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">www.elsevier.com/locate/cstp</a>
            </p>
          </div>


        </div>
        
    </div>
  );
}

export default Relevancia;
