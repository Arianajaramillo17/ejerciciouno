import React from 'react'
import Image from 'next/image'
import style from '../../styles/compstyles/footer.module.css'

export default function Footer() {
  return (
    < footer className={style.box_footer}>
      <div className={style.footer__container__color}>
        <section className={style.footer__container__size}>
          <ul className={style.footer__container}>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/ultimas-noticias/"> Últimas noticias </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/politica/">Política </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/elecciones/">Elecciones 2022  </a></li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/economia/"> Economía  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/sociedad/">Sociedad  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/deportes/">Deportes  </a></li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/espectaculos/"> Espectáculos  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/cine-series/">Cine & Series  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/mundo/">Mundo  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/tendencias/">Tendencias  </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/tecnologia/">Tecnología</a> </li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/cultura-asiatica/">Cultura Asiática </a></li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/columnistas/">Columnistas</a> </li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/verificador/">Verificador</a> </li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/datos-lr/"> Datos LR </a> </li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/mundo/argentina/"> Argentina</a> </li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/mundo/mexico/"> México  </a></li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/mundo/venezuela/"> Venezuela  </a></li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/mundo/loterias-sorteos/"> Loterías y sorteos </a> </li>
            <li className={style.footer__container__navitem}> <a href="https://larepublica.pe/sociedad/2021/11/29/feriados-2022-peru-calendario-de-feriados-dias-no-laborables-y-fines-de-semana-largos-declarados-por-el-gobierno/">Feriados 2022  </a></li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/horoscopo-chino/"> Horóscopo chino </a> </li>
            <li className={style.footer__container__navitem}><a href="https://larepublica.pe/datos-lr/respuestas/2022/01/06/cual-es-el-nombre-oficial-del-ano-2022-en-peru-atmp/"> Nombre del Año 2022 </a> </li>
          </ul>
        </section>
        <section className={style.footer__container_info }>
          <div className={style.footer__container__movability}>
      <Image src={'/assets/logo-larepublica.png'} height={100} width={310} alt="logo" className={style.footer_container_logo}/>

          <span className={style.containerFooterBorderRight_all_rights}>©Todos los derechos reservados - 2022</span>
          <span className={style.containerFooterBorderRight_all_rights}><a >Políticas y estándares -</a>
          <a >Términos de Uso</a></span>
          <a className={style.containerFooterBorderRight_all_rights}>Contáctenos</a>
        </div>
        </section>
      </div>
    </footer>
  )
}
