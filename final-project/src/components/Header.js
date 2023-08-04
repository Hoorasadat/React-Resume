const photo = "https://avatars.githubusercontent.com/u/46905199?v=4";
// const alt = "./assets/defaultProfileImg.png";

const Header = () => {
  return (
    <div>
      <header className="text-white bg-dark">
        <div className="container py-4">
          <div className="row">
            <div className="col-xs-3 col-lg-2 text-center">
              <img
                src={photo}
                alt="Hoora Mirsanei"
                className="border border-5 rounded-circle img-fluid"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col text-center text-lg-start">
              <h1>HooraSadat Mirsanei</h1>

              <p className="lead">Full-stack software development</p>

              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span className="text-center px-2"> 34 Strad Cres., SW, Calgary, AB T7H-4T4 </span>
                </li>

								<li className="list-inline-item">
									<a
                    href="tel:+14034000000"
                    className="fs-7 link-light text-decoration-none"
                  >
										<i className="bi bi-telephone-fill"></i>
										<span className="text-center px-2"> +1 (403) 400-0000 </span>
                  </a>
                </li>

              </ul>

              <ul className="list-inline">

                <li className="list-inline-item">
                  <a
                    href="mailto:Mirsaanei@gmail.com"
                    className="fs-7 link-light text-decoration-none"
                  >
                    <i className="bi bi-envelope pe-2"></i>
                    <span className="text-center px-2"> E-mail </span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/hoora-mirsanei/"
										target="_blank"
										rel="noreferrer"
                    className="fs-7 link-light text-decoration-none"
                  >
                    <i className="bi bi-linkedin pe-1"></i>
										<span className="text-center px-2"> LinkedIn </span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://github.com/Hoorasadat"
										target="_blank"
										rel="noreferrer"
                    className="fs-7 link-light text-decoration-none"
                  >
                    <i className="bi bi-github pe-1"></i>
										<span className="text-center px-2"> GitHub </span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
