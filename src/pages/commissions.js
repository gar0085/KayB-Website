import React from 'react';
import Layout from '../components/Layout/Layout';
import * as styles from './commissions.module.scss';

const Commissions = () => {
	return (
		<Layout>
			<main>
				<div className={styles.comContainer}>
					<iframe
						className={styles.comForm}
						src="https://docs.google.com/forms/d/e/1FAIpQLSfxzboaGZ9BYTriSF7tIrn7gggFiYHoGtAURUT9MjUj-aBcVg/viewform"
						sandbox=""
					></iframe>
				</div>
			</main>
		</Layout>
	);
};

export default Commissions;
