import {headerBuild} from "./commons/components/header.js";
import {footer} from "./commons/components/footer.js";


const objt = [
    {titulo:'SOBRE', endereco:'#sobre'},
    {titulo:'PROJETOS', endereco:'#projetos'},
    {titulo:'ARTIGOS', endereco:'./src/pages/articles/articles.html'},
    {titulo:'CONTATO', endereco:'#contato'},
    {titulo:'MAIS', endereco:'#contato'},
    {titulo:'TREM', endereco:'#contato'},
]

// header();
headerBuild(objt)
footer("By Victor Silva");


