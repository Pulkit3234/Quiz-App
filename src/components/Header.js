import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<i class="fas fa-book-open" style={{ color: 'yellow' }}></i>
				</IconButton>

				<Typography variant="h5" style={{ fontWeight: 'bold' }}>
					Quizify
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
