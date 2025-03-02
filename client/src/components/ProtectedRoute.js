import { useSelector, useDispatch } from "react-redux";
import {useNavigate, Link} from 'react-router-dom';
import {HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined} from '@ant-design/icons';
import { useEffect } from "react";
import { setUser } from "../redux/userSlice";
import { showLoading, hideLoading } from "../redux/loaderSlice";
import {message, Layout, Menu} from 'antd';
import { getCurrentUser } from "../api/users";


function ProtectedRoute({children}) {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {Header, Content, Footer, Sider} = Layout;
    const getValidUser = async () => {
        try {
            dispatch(showLoading());
            const response = await getCurrentUser();
            dispatch(setUser(response));
            dispatch(hideLoading());
        }catch(err) {
            dispatch(hideLoading());
            message.error(err.message);
        }
    }
    useEffect(() => {
        if(localStorage.getItem("token")) {
            getValidUser();
        }else {
            navigate('/Login');
        }
    }, [])

    const navItems = [
        {label: "Home", icon: <HomeOutlined/>},
        {label: `${user ? user.name: ""}`, icon: <UserOutlined/>, children: [
            {label: <span onClick={() => {
                if(user.role === "admin") {
                    navigate('/admin');
                } else if(user.role === "partner") {
                    navigate('/partner');
                }else {
                    navigate('/profile');
                }
            }}>My Profile</span>, icon: <ProfileOutlined/>},
            {label: (<Link to="/Login" onClick={() => {localStorage.removeItem("token")}}>Logout</Link>), icon: <LogoutOutlined/>,},
        ]},
    ];
    return (
        user && (
            <>
                <Layout>
                    <Header className="d-flex justify-content-between" style={{
                        position: 'sticky',
                        top: 1,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <h3 className="demo-logo text-white m-0" style={{color: "white"}}>Book My Show</h3>
                        <Menu theme="dark" mode="horizontal" items={navItems}/>
                    </Header>
                    <div style={{padding: "24", minHeight: 380, background: "#fff"}}>{children}</div>
                </Layout>
            </>
        )
        // <div>
        //     {children}
        // </div>
    )
}

export default ProtectedRoute;