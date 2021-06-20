import Image from 'next/image';
import { useContext, useRef, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css' 
import { PlayerContext } from '../../contexts/PlayerContext';
import styles from './styles.module.scss'

export function Player() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying, 
    togglePlay,
    setPlayingState
  } = useContext(PlayerContext)

  // disparar essa função toda vez que isPlaying for alterado  
  useEffect(() =>{
        // não retorna nada
    if (!audioRef.current) {
      return;
    }
      // Se isPlaying for true - play
    if (isPlaying) {
      audioRef.current.play();

      // agora se isPlaying for falso - pausar
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  const episode = episodeList[currentEpisodeIndex]

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora {episode?.title}</strong>
      </header>
      {/* Se existir o epsodio mostrar isso se não existir mostrar "Selecione um podcast para ouvir" */}
      { episode ? (
        <div className={styles.currentEpisode}>
          <Image 
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

                        {/* casso eu não tenha um epsodio */}
      <footer className={ !episode ? styles.empty : ''}> 
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}> 
          {/* se eu tiver um epsodio vou mostrar <Slider/> se não vou mostrar emptySlider */}
          { episode ? (
            <Slider 
              trackStyle={{backgroundColor: '#04d361'}}
              railStyle={{ background: '#9f75ff'}}
              handleStyle={{borderColor: '#04d361', borderWidth: 4}}
            />
          ) : (
            <div className={styles.emptySlider}/>
          )}
          </div>
          <span>00:00</span>
        </div>

        { episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className={styles.buttons}>
                                {/* desabilitado caso não tenha epsidode tocando */}
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button 
            type="button" 
            className={styles.playButton} 
            disabled={!episode}
            onClick={togglePlay}
          >
             {/* se estiver tocando  mostrar pause.svg se não*/}
            { isPlaying 
              ? <img src="/pause.svg" alt="Pause"/> 
              : <img src="/play.svg" alt="Tocar" />
            }
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  );
}