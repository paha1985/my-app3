import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const clickNextBtn = (event) =>
		activeIndex != steps.length - 1
			? setActiveIndex(activeIndex + 1)
			: setActiveIndex(0);
	const clickPrevBtn = (event) => setActiveIndex(activeIndex - 1);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{/* Контент соответственный шагу. Сейчас активен шаг 3 */}
						{/* {steps[activeIndex]} */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								className={
									activeIndex != index
										? activeIndex < index
											? styles['steps-item']
											: styles['steps-item'] + ' ' + styles.done
										: styles['steps-item'] +
											' ' +
											styles.done +
											' ' +
											styles.active
								}
							>
								<button className={styles['steps-item-button']}>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={clickPrevBtn}
							className={styles.button}
							disabled={activeIndex === 0}
						>
							Назад
						</button>
						<button onClick={clickNextBtn} className={styles.button}>
							{activeIndex === steps.length - 1
								? 'Начать сначала'
								: 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
