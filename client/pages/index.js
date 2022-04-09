import TopNav from "../components/TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, EditOutlined, PieChartOutlined, DollarOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const Index = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}> 
    <Header style={{ padding: 0}}>
        <TopNav />
      </Header>
      <h1 className="jumbotron text-center bg-primary square">
        VR Therapy
      </h1>
      <Content>
      <p>from next js...</p>
      </Content>
      <Footer style={{ textAlign: 'center' }}>--© {(new Date().getFullYear())} Make IT Oradea, All Rights Reserved</Footer>
    </Layout>
  );
};

export default Index;
