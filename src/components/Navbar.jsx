import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie } from 'react-icons/bi'

function NavBAr() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand"><BiCameraMovie /> Movies Lib</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Pesquisar Filme" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Pesquisar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBAr
