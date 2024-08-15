const Footer = () => {
    const presentYear = new Date().getFullYear();
    const handleSoundPausePlay = useAudio({ audioTrack: JethaBg });
  
    return (
      <section className={styles.footer}>
        <div className={styles.linksContainer}>
          {FOOTER_LINKS.map((singleLink) => (
            <Link key={singleLink.id} to={singleLink.url} target='_blank'>
              {singleLink.icon}
            </Link>
          ))}
        </div>
  
        <div className={styles.copyrightDiv}>
          <span>© {presentYear} </span>
          <div className={styles.jethaDiv}>
            <button onClick={handleSoundPausePlay} className={styles.nameBtn}>
              Jethalal Gada.
            </button>{' '}
            <div className={styles.tooltip}>⚠ Includes Music !!</div>
          </div>
          <span>All rights reserved</span>
        </div>
      </section>
    );
  };
  
  export default Footer;