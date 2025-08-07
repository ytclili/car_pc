import React, { useState } from 'react';
import './index.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberAccount, setRememberAccount] = useState(false);
    const [verificationSuccess, setVerificationSuccess] = useState(true);

    const handleLogin = () => {
        console.log('登录信息:', { username, password, rememberAccount });
        // 这里添加登录逻辑
    };

    return (
        <div className="login-container">
            {/* 背景装饰 */}
            <div className="background-decoration"></div>
            
            {/* 主登录卡片 */}
            <div className="login-card">
                {/* Logo区域 */}
                <div className="logo-section">
                    <div className="logo-circle">
                        <div className="logo-icon"></div>
                    </div>
                    <h1 className="title">新车帮买管理后台</h1>
                    <p className="subtitle">智能管理，高效服务</p>
                </div>

                {/* 表单区域 */}
                <div className="form-section">
                    {/* 账号输入 */}
                    <div className="input-group">
                        <label className="input-label">账号</label>
                        <div className="input-wrapper">
                            <div className="input-icon user-icon"></div>
                            <input
                                type="text"
                                placeholder="请输入账号"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                            />
                        </div>
                    </div>

                    {/* 密码输入 */}
                    <div className="input-group">
                        <label className="input-label">密码</label>
                        <div className="input-wrapper">
                            <div className="input-icon password-icon"></div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="请输入密码"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <div className={`eye-icon ${showPassword ? 'eye-open' : 'eye-close'}`}></div>
                            </button>
                        </div>
                    </div>

                    {/* 验证码区域 */}
                    <div className="input-group">
                        <label className="input-label">验证</label>
                        {verificationSuccess && (
                            <div className="verification-success">
                                <div className="success-icon"></div>
                                <span>验证成功</span>
                            </div>
                        )}
                    </div>

                    {/* 记住账号选项 */}
                    <div className="remember-section">
                        <label className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                checked={rememberAccount}
                                onChange={(e) => setRememberAccount(e.target.checked)}
                                className="checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-label">记住账号</span>
                        </label>
                    </div>

                    {/* 登录按钮 */}
                    <button className="login-button" onClick={handleLogin}>
                        登 录
                    </button>
                </div>

                {/* 客服信息 */}
                <div className="customer-service">
                    遇到问题？联系客服 400-888-8888
                </div>
            </div>

            {/* 底部装饰 */}
            <div className="bottom-decoration"></div>

            {/* 页脚信息 */}
            <div className="footer">
                <p className="browser-tip">推荐使用Chrome、Firefox等浏览器访问</p>
                <p className="copyright">© 2023 新车帮买科技有限公司</p>
                <p className="icp">浙ICP备2024106990号</p>
            </div>
        </div>
    );
};

export default Login;