import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './page/main/view/main'
import '../public/css/index.css'
import { ConfigProvider } from 'antd'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'rgba(255,255,255)',
            colorBgContainer: 'rgba(237, 246, 249)'
          }
        }
      }}>
      <MainPage />
    </ConfigProvider>
  </StrictMode>,
)
