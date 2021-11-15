import "./LayoutContainer.scss";
import { Layout } from 'antd';
import CommonAside from "../CommonAside/CommonAside";
import Routes from "../../routes";
const { Header, Footer,Sider, Content } = Layout;


const LayoutContainer = () => {
    return (
        <Layout>
            <Sider>
                <CommonAside></ CommonAside>
            </Sider>
            <Layout className='main'>
                <Header>Header</Header>
                <Content>{Routes()}</Content>
                <Footer>footer</Footer>
            </Layout>
        </Layout>
            )
}

export default LayoutContainer