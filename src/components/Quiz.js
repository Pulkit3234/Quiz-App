import { Container, Card, CardHeader, CardContent, Checkbox, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { apiActions } from '../store/ApiSlice';

const Quiz = () => {
	console.log('hi');
	const [index, setIndex] = useState(0);
	const [checked, setChecked] = useState(false);
	const [option, setOption] = useState({
		a: false,
		b: false,
		c: false,
		d: false,
	});
	const [correct, setCorrect] = useState('');
	const [score, setScore] = useState(0);

	const { data } = useSelector((state) => state.api);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		console.log(correct_answer?.split('_')[1]);
		if (e.target.name === correct_answer?.split('_')[1]) {
			setScore((prevScore) => prevScore + 1);
		}
		console.log(e.target.name);
		let count = 1;
		for (let value in option) {
			if (option[value] === true) {
				count++;
			}
		}
		if (count > 2) {
			return;
		}
		const value = !option[e.target.name];
		
		console.log(value);
		setOption({ a: false, b: false, c: false, d: false, [e.target.name]: value });
	};

	const forwardClickHandler = () => {
		console.log(score);

		console.log('clicked');
		setIndex((prevState) => prevState + 1);
		for (let value in option) {
			option[value] = false;
		}
	};

	const backwardClickHandler = () => {
		setChecked(false);
		setIndex((prevState) => prevState - 1);
		for (let value in option) {
			option[value] = false;
		}
	};

	const againQuizHandler = () => {
		dispatch(apiActions.restart());
	};
	if (index === data?.length) {
		return (
			<>
				<h2>Thanks For Taking the Quiz</h2>
				<p>{score}</p>
				<Button variant="contained" color="primary" onClick={againQuizHandler}>
					Take Quiz Again
				</Button>
			</>
		);
	}

	const {
		answers: { answer_a, answer_b, answer_c, answer_d },
		correct_answers: { answer_a_correct, answer_b_correct, answer_c_correct, answer_d_correct },
		question,
		multiple_correct_answers,
		correct_answer,
	} = data[index];

	console.log(correct_answer);
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
						{answer_a ? <Checkbox checked={option.a} onChange={handleChange} name="a" /> : ''}
						{answer_a}
					</h4>

					<h4>
						{answer_b ? <Checkbox checked={option.b} onChange={handleChange} name="b" /> : ''}
						{answer_b}
					</h4>

					<h4>
						{answer_c ? <Checkbox checked={option.c} onChange={handleChange} name="c" /> : ''}
						{answer_c}
					</h4>

					<h4>
						{answer_d ? <Checkbox checked={option.d} onChange={handleChange} name="d" /> : ''}
						{answer_d}
					</h4>
				</CardContent>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<CardContent>
						{index !== 0 && (
							<Button variant="contained" color="primary" onClick={() => backwardClickHandler()}>
								Prev Question
							</Button>
						)}
					</CardContent>
					<CardContent>
						{index === data.length - 1 ? (
							<Button
								variant="contained"
								color="secondary"
								onClick={ forwardClickHandler}
							>
								Submit Quiz
							</Button>
						) : (
							<Button variant="contained" color="primary" onClick={forwardClickHandler}>
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
