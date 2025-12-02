pipeline {
    agent { label 'agent' }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/akheel-zuber/jenkins-practice'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Test Successfull"'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deployment successfull"'
            }
        }
    }
}

