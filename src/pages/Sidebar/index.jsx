import List from '@mui/material/List';
import {Box} from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Sidebar = () => {
    let n = 20;
    let array = [...Array(n)];
    return(
       <Box height={100} display='flex' flexDirection='column' rowGap={1.5} className='sidebar'>
          <Box ml={2} mt={2} width={100}><NavLink to="/teams" className="nav-link" activeClassName="nav-link-active">Teams</NavLink></Box>
          <Box ml={2}><NavLink to="/players" className="nav-link" activeClassName="nav-link-active">Players</NavLink></Box>
          <Box ml={2}><NavLink to="/counter" className="nav-link" activeClassName="nav-link-active">Counter</NavLink></Box>
          <Box ml={2}><NavLink to="/tasks" className="nav-link" activeClassName="nav-link-active">Tasks</NavLink></Box>
          {array.map((e, i) => <Box ml={2} key={i}><NavLink to={"/counter"+(i+1)} className="nav-link" activeClassName="nav-link-active">Counter {i+1}</NavLink></Box>)}
       </Box>
    );
};

const list = () => (
    <Box
      sx={{ width:250 }}
      role="toolbar"
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

export default Sidebar;