import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css' 
import { usePlayer } from '../../contexts/PlayerContext';
import styles from './styles.module.scss'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

export function Player() {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    clearPlayerState
  } = usePlayer();

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

  function setuoProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    });
  };

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  };

  function handleEpisodeEnded() {
    if (hasNext) {
       playNext()
    } else {
      clearPlayerState()
    }
  };

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
      ) }

                        {/* casso eu não tenha um epsodio */}
      <footer className={ !episode ? styles.empty : ''}> 
        <div className={styles.progress}>
          <span>{convertDurationToTimeString(progress)}</span>
          <div className={styles.slider}> 
          {/* se eu tiver um epsodio vou mostrar <Slider/> se não vou mostrar emptySlider */}
          { episode ? (
            <Slider
              max={episode.duration}
              value={progress}
              onChange={handleSeek}
              trackStyle={{backgroundColor: '#04d361'}}
              railStyle={{ background: '#9f75ff'}}
              handleStyle={{borderColor: '#04d361', borderWidth: 4}}
            />
          ) : (
            <div className={styles.emptySlider}/>
          )}
          </div>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        { episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            loop={isLooping}
            autoPlay
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setuoProgressListener}
          />
        )}

        <div className={styles.buttons}>
                                {/* desabilitado caso não tenha epsidode tocando */}
          <button 
            type="button" 
            disabled={!episode || episodeList.length === 1 }
            onClick={toggleShuffle}
            className={isShuffling ? styles.isActive : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button 
            type="button" 
            className={styles.playButton}
            disabled={!episode}
            onClick={togglePlay}
          >
             {/* se estiver tocando  mostrar pause se não mostra tocar*/}
            { isPlaying 
              ? <img src="/pause.svg" alt="Pause"/> 
              : <img src="/play.svg" alt="Tocar" />
            }
          </button>
          <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button 
            type="button" 
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? styles.isActive : ''}
          >
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  );
}