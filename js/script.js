class maNavbar extends HTMLElement{
    connectedCallback(){

        const isGitHub = window.location.hostname.includes("github.io");
        const repoName = "mon-site";

        const root = isGitHub ? `/${repoName}/` : "/";

        this.innerHTML =
        `
        <style>
            nav {
            font-size: 30px;
            }
            ul {
                position: fixed;
                display: flex;
                justify-content: center;
                width: 97%;
                padding: 10px;
                list-style-type: none;
                overflow: hidden;

                /* From https://css.glass */
                background: rgba(255, 255, 255, 0);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(6.1px);
                -webkit-backdrop-filter: blur(6.1px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 100px;
            }

            ul li {
            float: left;
            
            }

            ul li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            
            }
        </style>
        <nav>
        <ul>
            <li>
                <a href="${root}pages/mes-projets.html">Mes Projets</a>
            </li>
            <li>
                <a>Moi</a>
            </li>
            <li>
                <a href="${root}index.html">Accueil</a>
            </li>
        </ul>
    </nav>
        `;
    }
}
customElements.define('ma-navbar', maNavbar);5