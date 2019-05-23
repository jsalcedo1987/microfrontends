import styles from './css/styles.css';

export default ({ name, staticPath }) =>
`<div class=${styles.coolbox}>
<p>
<h3>Login using your PID</h3>
<br>
PID:
<input type="text" name="PID" value="">
<br>
</p>
</div>`;
