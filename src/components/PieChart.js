import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieChart = ({ score }) => {
	const { data } = useSelector((state) => state.api);
	const length = data.length;
	const incorrect = length - score;
	return (
		<>
			<Pie
				data={{
					labels: ['Correct', 'Incorrect'],
					datasets: [
						{
							label: ['correct Score', 'Incorrect'],
							data: [score, incorrect],
							backgroundColor: ['green', 'red'],
							borderColor: ['red', 'yellow'],
						},
					],
				}}
				height={100}
				width={200}
			/>
		</>
	);
};

export default PieChart;
