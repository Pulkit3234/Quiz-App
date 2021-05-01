import { Container, Card, CardHeader, CardContent, Checkbox, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Quiz = () => {
	const [index, setIndex] = useState(0);

	const { data } = useSelector((state) => state.api);
	const dispatch = useDispatch();

	if (index === data.length) {
		return <h2>Thanks For Taking the Quiz</h2>;
	}
	const {
		answers: { answer_a, answer_b, answer_c, answer_d },
		correct_answers: { amswer_a_correct, answer_b_correct, answer_c_correct, answer_d_correct },
		question,
		multiple_correct_answers,
	} = data[index];

	return (
		<Container style={{ marginTop: '20px' }}>
			<Card>
				<CardHeader
					title={
						data && (
							<h3>
								Q-{index + 1} {question}
							</h3>
						)
					}
					style={{ margin: '10px' }}
				/>
				<CardContent>
					<h4>
						{answer_a ? <Checkbox /> : ''}
						{answer_a}
					</h4>

					<h4>
						{answer_b ? <Checkbox /> : ''}
						{answer_b}
					</h4>

					<h4>
						{answer_c ? <Checkbox /> : ''}
						{answer_c}
					</h4>

					<h4>
						{answer_d ? <Checkbox /> : ''}
						{answer_d}
					</h4>
				</CardContent>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<CardContent>
						{index !== 0 && (
							<Button
								variant="contained"
								color="primary"
								onClick={() => setIndex((prevState) => prevState - 1)}
							>
								Prev Question
							</Button>
						)}
					</CardContent>
					<CardContent>
						{index === data.length - 1 ? (
							<Button
								variant="contained"
								color="secondary"
								onClick={() => setIndex((prevState) => prevState + 1)}
							>
								Submit Quiz
							</Button>
						) : (
							<Button
								variant="contained"
								color="primary"
								onClick={() => setIndex((prevState) => prevState + 1)}
							>
								Next Question
							</Button>
						)}
					</CardContent>
				</div>
			</Card>
		</Container>
	);
};

export default Quiz;
