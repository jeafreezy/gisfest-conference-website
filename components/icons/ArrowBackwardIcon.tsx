import { TSVGProps } from '@/config/types';

const ArrowBackwardIcon = ({
	width,
	height,
	fillColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M19 10.9997H7.83005L12.71 6.11967C13.1 5.72967 13.1 5.08967 12.71 4.69967C12.6175 4.60697 12.5076 4.53342 12.3867 4.48324C12.2657 4.43306 12.136 4.40723 12.005 4.40723C11.8741 4.40723 11.7444 4.43306 11.6234 4.48324C11.5024 4.53342 11.3926 4.60697 11.3 4.69967L4.71005 11.2897C4.61734 11.3822 4.5438 11.4921 4.49361 11.613C4.44343 11.734 4.4176 11.8637 4.4176 11.9947C4.4176 12.1256 4.44343 12.2553 4.49361 12.3763C4.5438 12.4973 4.61734 12.6072 4.71005 12.6997L11.3 19.2897C11.3926 19.3823 11.5025 19.4557 11.6235 19.5058C11.7445 19.5559 11.8741 19.5817 12.005 19.5817C12.136 19.5817 12.2656 19.5559 12.3866 19.5058C12.5076 19.4557 12.6175 19.3823 12.71 19.2897C12.8026 19.1971 12.8761 19.0872 12.9262 18.9662C12.9763 18.8452 13.0021 18.7156 13.0021 18.5847C13.0021 18.4537 12.9763 18.3241 12.9262 18.2031C12.8761 18.0822 12.8026 17.9723 12.71 17.8797L7.83005 12.9997H19C19.55 12.9997 20 12.5497 20 11.9997C20 11.4497 19.55 10.9997 19 10.9997Z"
			fill={fillColor}
		/>
	</svg>
);

export default ArrowBackwardIcon;
