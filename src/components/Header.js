import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start"  color="inherit" aria-label="menu">
					<i class="fas fa-book-open"></i>
				</IconButton>

				<Typography variant="h6" >
					Quiz App
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
