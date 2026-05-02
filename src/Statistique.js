import './Statistique.css';

function Statistique() {
  return (
    <div className="statistique">
      <div className="stat-item">
        <span className="stat-chiffre">50+</span>
        <span className="stat-libelle">Lignes de bus</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">3M</span>
        <span className="stat-libelle">Passagers par jour</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">14</span>
        <span className="stat-libelle">Communes desservies</span>
      </div>
    </div>
  );
}

export default Statistique;