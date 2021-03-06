import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './Dashboard.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Orders from './Orders/Orders';
import Payment from './Payment/Payment';
import useAuth from '../Hooks/useAuth';
import PostReview from './PostReview/PostReview';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';


const drawerWidth = 240;

function Dashboard(props) {

    const { logOut, user, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box>
                <Link to="/home"><Button className="ms-5">Home</Button></Link>
                {/* <Link to={`${url}`}><Button className="ms-5">Dashboard</Button></Link> */}
                <Link to={`${url}/orders`}><Button className="ms-5">My Orders</Button></Link>
                <Link to={`${url}/payment`}><Button className="ms-5">Payment</Button></Link>
                <Link to={`${url}/review`}><Button className="ms-5">Review</Button></Link>

                {admin && <Box>
                    <Link to={`${url}/manage_order`}><Button className="ms-5">Manage All Orders</Button></Link>
                    <Link to={`${url}/add_product`}><Button className="ms-5">Add Product</Button></Link>
                    <Link to={`${url}/manage_products`}><Button className="ms-5">Manage Products</Button></Link>
                    <Link to={`${url}/makeAdmin`}><Button className="ms-5">Make Admin</Button></Link>
                </Box>}

                <Button onClick={logOut} className="ms-5">Log out</Button>

            </Box>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard :
                    </Typography>
                    {user?.email &&
                        <Typography sx={{ ml: 2 }} variant="h6" noWrap component="div">
                            {user.displayName}
                        </Typography>}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Orders></Orders>
                    </Grid>
                </Grid> */}

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Orders></Orders>
                    </Route>
                    <Route path={`${path}/manage_order`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <PostReview></PostReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/add_product`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manage_products`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
