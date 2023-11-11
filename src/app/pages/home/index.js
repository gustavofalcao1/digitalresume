import { useEffect, useState } from 'react'
import axios from 'axios';
import { TbFolderCode, TbStar, TbGitFork, TbBrandTabler, TbBrandCss3, TbBrandHtml5, TbBrandCpp, TbBrandCSharp, TbBrandJavascript } from 'react-icons/tb'
import locale from 'locale'
import './index.css'

const Home = () => {
  const [personalRepo, setPersonalRepo] = useState(null)
  //const [forkedRepo, setForkedRepo] = useState(null)
  const [orgRepo, setOrgRepo] = useState(null)
  const [showAllProject, setShowAllProject] = useState(false)
  //const [showAllForked, setShowAllForked] = useState(false)
  const [showAllOrgs, setShowAllOrgs] = useState(false)

  const handleRepository = (e) => {
    window.open(`${e.svn_url}`, '_blank')
  }

  const handleShowAllProject = () => {
    setShowAllProject(!showAllProject)
  }/*
  const handleShowAllForked = () => {
    setShowAllForked(!showAllForked)
  }*/
  const handleShowAllOrgs = () => {
    setShowAllOrgs(!showAllOrgs)
  }

  const LangIcon = (item) => {
    if (item.item.language?.toLowerCase() === 'javascript') {
      return <TbBrandJavascript size={22} color='#F0DB4F' />
    } 
    if (item.item.language?.toLowerCase() === 'css') {
      return <TbBrandCss3 size={22} color='#2565AE' />
    }
    if (item.item.language?.toLowerCase() === 'html') {
      return <TbBrandHtml5 size={22} color='#E34C26' />
    }
    if (item.item.language?.toLowerCase() === 'shell') {
      return <TbBrandTabler size={22} color='#000000' />
    }
    if (item.item.language?.toLowerCase() === 'c++') {
      return <TbBrandCpp size={22} color='#659ad2' />
    }
    if (item.item.language?.toLowerCase() === 'c#') {
      return <TbBrandCSharp size={22} color='#A179DC' />
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = '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';
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        const userResponse = await axios.get('https://api.github.com/users/gustavofalcao1/repos', { headers });
        const userRepositories = userResponse.data;
        const personal = userRepositories.filter(repo => !repo.fork);
        const sortedPersonals = personal.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setPersonalRepo(sortedPersonals);
        /*
        const forked = userRepositories.filter(repo => repo.fork);
        const sortedForkeds = forked.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setForkedRepo(sortedForkeds)
        */
        const org1Response = await axios.get('https://api.github.com/orgs/clueyai/repos', { headers });
        const org1Repositories = org1Response.data;

        const org2Response = await axios.get('https://api.github.com/orgs/geekinfinity/repos', { headers });
        const org2Repositories = org2Response.data;
  
        const allOrgs = [
          ...org1Repositories,
          ...org2Repositories,
        ];
  
        const sortedOrgs = allOrgs.sort((a, b) => b.stargazers_count - a.stargazers_count);
  
        setOrgRepo(sortedOrgs)
      } catch (error) {
        console.error('Erro ao buscar dados dos repositórios', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="home-container">
      <div className='home-box'>
        <div className='home-header'>
          <p className='home-left-txt'>{locale?.home.projects?.title}</p>
          <p className='home-right-txt' onClick={handleShowAllProject}>
            {showAllProject ?
              locale.home.buttons?.hide:
              locale.home.buttons?.all
            }
          </p>
        </div>
      </div>
      <div className='home-content'>
      {personalRepo?.slice(0, showAllProject ? personalRepo.length : 6).map((item, index) => (
        <div className='home-box2' key={index} onClick={() => handleRepository(item)}>
          <div className='home-title'>
            <TbFolderCode size={24} />
            <p className='home-title-txt'>{item.name}</p>
          </div>
          <div className='home-section'>
            <p className='home-section-txt'>{item.description}</p>
          </div>
          <div className='home-footer'>
            <div className='home-count'>
              <div className='home-item'>
                <TbStar size={18} />
                <p className='home-count-txt'>{item.stargazers_count}</p>
              </div>
              <div className='home-item'>
                <TbGitFork size={18} />
                <p className='home-count-txt'>{item.forks_count}</p>
              </div>
            </div>
            <div className='home-lang'>
              <LangIcon item={item} />
              <p className='home-footer-txt'>{item.language}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      {/*
      <div className='home-box'>
        <div className='home-header'>
          <p className='home-left-txt'>{locale.home.forked?.title}</p>
          <p className='home-right-txt' onClick={handleShowAllForked}>
            {showAllForked ?
              locale.home.buttons?.hide:
              locale.home.buttons?.all
            }
          </p>
        </div>
      </div>
      <div className='home-content'>
      {forkedRepo?.slice(0, showAllForked ? forkedRepo.length : 6).map((item, index) => (
        <div className='home-box2' key={index} onClick={() => handleRepository(item)}>
          <div className='home-title'>
            <TbFolderCode size={24} />
            <p className='home-title-txt'>{item.name}</p>
          </div>
          <div className='home-section'>
            <p className='home-section-txt'>{item.description}</p>
          </div>
          <div className='home-footer'>
            <div className='home-count'>
              <div className='home-item'>
                <TbStar size={18} />
                <p className='home-count-txt'>{item.stargazers_count}</p>
              </div>
              <div className='home-item'>
                <TbGitFork size={18} />
                <p className='home-count-txt'>{item.forks_count}</p>
              </div>
            </div>
            <div className='home-lang'>
              <LangIcon item={item} />
              <p className='home-footer-txt'>{item.language}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      */}
      <div className='home-box'>
        <div className='home-header'>
          <p className='home-left-txt'>{locale.home.org?.title}</p>
          <p className='home-right-txt' onClick={handleShowAllOrgs}>
            {showAllOrgs ?
              locale.home.buttons?.hide:
              locale.home.buttons?.all
            }
          </p>
        </div>
      </div>
      <div className='home-content'>
      {orgRepo?.slice(0, showAllOrgs ? orgRepo.length : 6).map((item, index) => (
        <div className='home-box2' key={index} onClick={() => handleRepository(item)}>
          <div className='home-title'>
            <TbFolderCode size={24} />
            <p className='home-title-txt'>{item.name}</p>
          </div>
          <div className='home-section'>
            <p className='home-section-txt'>{locale.home.org?.name}</p>
            <p className='home-section-org'>{item.owner.login}</p>
          </div>
          <div className='home-section'>
            <p className='home-section-txt'>{item.description}</p>
          </div>
          <div className='home-footer'>
            <div className='home-count'>
              <div className='home-item'>
                <TbStar size={18} />
                <p className='home-count-txt'>{item.stargazers_count}</p>
              </div>
              <div className='home-item'>
                <TbGitFork size={18} />
                <p className='home-count-txt'>{item.forks_count}</p>
              </div>
            </div>
            <div className='home-lang'>
              <LangIcon item={item} />
              <p className='home-footer-txt'>{item.language}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </main>
  )
}

export default Home
