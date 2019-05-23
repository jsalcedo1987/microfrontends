import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.awesome}>
    <img class=${styles.adsize} src="${staticPath}img/123_sbbi_ad.png" />
  </div>`;
