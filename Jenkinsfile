pipeline {
    agent any
    stages {
        stage('Unit Test') {
            steps {
                sh 'npm install'
                sh 'npm test'     
            }
        }
    }
}
