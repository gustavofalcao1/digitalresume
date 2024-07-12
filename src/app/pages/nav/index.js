import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi'
import { MdShareLocation, MdOutlineSchool, MdOutlineMailOutline } from 'react-icons/md'
import locale from 'locale'
import './index.css'

const Nav = () => {

  const handleCountry = () => {
    window.open('https://www.google.com/maps/place/Porto/@41.1621429,-8.6219537,13z/data=!3m1!4b1!4m6!3m5!1s0xd2465abc4e153c1:0xa648d95640b114bc!8m2!3d41.1579438!4d-8.6291053!16zL20vMHBtbjc?entry=ttu', '_blank')
  }
  const handleAcademic = () => {
    window.open('https://www.islagaia.pt/pt/ensino/licenciaturas/652-engenharia-informatica.html', '_blank')
  }
  const handleGithub = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleLinked = () => {
    window.open('https://www.linkedin.com/in/gustavofalcao1/', '_blank')
  }
  const handleWeb = () => {
    window.open('https://geekinfinity.github.io/', '_blank')
  }
  const handleEmail = () => {
    window.open('mailto:gustavo.falcao01@gmail.com', '_blank')
  }
  
  const handleJavascript = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleReactjs = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleNodejs = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleTypescript = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleGit = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleHtml = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleCss = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleFigma = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }
  const handleReactNative = () => {
    window.open('https://github.com/gustavofalcao1', '_blank')
  }

  return (
    <main className='nav-container'>
      <div className='nav-box'>
        <div className='nav-photo'>
          <img className='nav-img' src={locale.nav.photo} alt={locale.nav.name} />
        </div>
        <div className='nav-profile'>
          <p className='nav-name-txt'>{locale.nav.name}</p>
          <p className='nav-description-txt'>{locale.nav.job}</p>
        </div>
      </div>
      <div className='nav-box'>
        <div className='nav-item'>
          <MdShareLocation className='icon' size={24} />
          <p className='nav-item-txt' onClick={handleCountry}>{locale.nav.country}</p>
        </div>
        <div className='nav-item'>
          <MdOutlineSchool className='icon' size={24} />
          <p className='nav-item-txt' onClick={handleAcademic}>{locale.nav.academic}</p>
        </div>
        <div className='nav-item'>
          <FiGithub className='icon' size={22} />
          <p className='nav-item-txt' onClick={handleGithub}>{locale.nav.github}</p>
        </div>
        <div className='nav-item'>
          <FiLinkedin className='icon' size={22} />
          <p className='nav-item-txt' onClick={handleLinked}>{locale.nav.linked}</p>
        </div>
        <div className='nav-item'>
          <FiGlobe className='icon' size={24} />
          <p className='nav-item-txt' onClick={handleWeb}>{locale.nav.web}</p>
        </div>
        <div className='nav-item'>
          <MdOutlineMailOutline className='icon' size={24} />
          <p className='nav-item-txt' onClick={handleEmail}>{locale.nav.email}</p>
        </div>
      </div>
      <div className='nav-box'>
        <p className='nav-tec-title'>{locale.nav.tec}</p>
        <div className='nav-tec'>
          <p className='nav-tec-txt' onClick={handleJavascript}>{locale.nav.javascript}</p>
          <p className='nav-tec-txt' onClick={handleReactjs}>{locale.nav.reactjs}</p>
          <p className='nav-tec-txt' onClick={handleNodejs}>{locale.nav.nodejs}</p>
        </div>
        <div className='nav-tec'>
          <p className='nav-tec-txt' onClick={handleTypescript}>{locale.nav.typescript}</p>
          <p className='nav-tec-txt' onClick={handleGit}>{locale.nav.git}</p>
          <p className='nav-tec-txt' onClick={handleHtml}>{locale.nav.html}</p>
        </div>
        <div className='nav-tec'>
          <p className='nav-tec-txt' onClick={handleCss}>{locale.nav.css}</p>
          <p className='nav-tec-txt' onClick={handleFigma}>{locale.nav.figma}</p>
          <p className='nav-tec-txt' onClick={handleReactNative}>{locale.nav.react_native}</p>
        </div>
      </div>
      <div className='nav-box'>
        <p className='nav-exp-title'>{locale.nav.exp}</p>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.epad.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.epad.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.epad.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.isla.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.isla.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.isla.description}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='nav-box'>
        <p className='nav-exp-title'>{locale.nav.edu}</p>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.ei.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.ei.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.ei.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.os.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.os.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.os.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.rsi.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.rsi.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.rsi.description}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='nav-box'>
        <p className='nav-exp-title'>{locale.nav.cert}</p>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.itn.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.itn.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.itn.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.rse.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.rse.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.rse.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.sn.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.sn.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.sn.description}</p>
            </div>
          </li>
        </ul>
        <ul className='nav-exp'>
          <li className='nav-exp-list'>
            <p className='nav-exp-list-title'>{locale.nav.cn.title}</p>
            <div className='nav-exp-content'>
              <p className='nav-exp-list-txt'>{locale.nav.cn.date}</p>
              <p className='nav-exp-list-txt'>{locale.nav.cn.description}</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Nav
