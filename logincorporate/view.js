import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.coolbox}>
  <p>
  <h3>Login using your CompanyId</h3>
  <br>
  CompanyId:
  <input type="text" name="CompanyId" value="">
  <br>
  UserId:
  <input type="text" name="UserId" value="">
  <br>
  </p>
</div>`;
