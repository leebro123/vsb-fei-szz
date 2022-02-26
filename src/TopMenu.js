
const TopMenu = ({ setSection, setSubsection}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Volitelné
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={()=> {setSection("optional"); setSubsection("data_analysis")}}>Datová analýza</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Povinné
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={()=> {setSection("mandatory"); setSubsection("math")}}>Matematika</a>
          <a className="dropdown-item" onClick={()=> {setSection("mandatory"); setSubsection("database")}}>Databáze</a>
          <a className="dropdown-item" onClick={()=> {setSection("mandatory"); setSubsection("software_engineering")}}>Softwarové inženýrství</a>
          <a className="dropdown-item" onClick={()=> {setSection("mandatory"); setSubsection("network")}}>Počítačové sítě</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )

export default TopMenu