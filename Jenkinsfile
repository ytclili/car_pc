pipeline {
    agent any  // 在任何可用节点上运行
    stages {
        stage('Build') {   // 阶段1：构建
            steps {
                echo 'Building...'  // 打印日志
            }
        }
        stage('Test') {    // 阶段2：测试
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {   // 阶段3：部署
            steps {
                echo 'Deploying...'
            }
        }
    }
}